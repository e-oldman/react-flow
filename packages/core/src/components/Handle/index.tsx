import { memo, HTMLAttributes, forwardRef, MouseEvent as ReactMouseEvent } from 'react';
import cc from 'classcat';
import { shallow } from 'zustand/shallow';

import { useStore, useStoreApi } from '../../hooks/useStore';
import { useNodeId } from '../../contexts/NodeIdContext';
import { handleMouseDown } from './handler';
import { devWarn, getHostForElement } from '../../utils';
import { addEdge } from '../../utils/graph';
import { Position } from '../../types';
import type { HandleProps, Connection, ReactFlowState } from '../../types';
import { isValidHandle } from './utils';

const alwaysValid = () => true;

export type HandleComponentProps = HandleProps & Omit<HTMLAttributes<HTMLDivElement>, 'id'>;

const selector = (s: ReactFlowState) => ({
  connectionStartHandle: s.connectionStartHandle,
  connectOnClick: s.connectOnClick,
  noPanClassName: s.noPanClassName,
});

const Handle = forwardRef<HTMLDivElement, HandleComponentProps>(
  (
    {
      type = 'source',
      position = Position.Top,
      isValidConnection = alwaysValid,
      isConnectable = true,
      id,
      onConnect,
      children,
      className,
      onMouseDown,
      ...rest
    },
    ref
  ) => {
    const store = useStoreApi();
    const nodeId = useNodeId();

    if (!nodeId) {
      devWarn('Handle: No node id found. Make sure to only use a Handle inside a custom Node.');
      return null;
    }

    const { connectionStartHandle, connectOnClick, noPanClassName } = useStore(selector, shallow);

    const handleId = id || null;
    const isTarget = type === 'target';

    const onConnectExtended = (params: Connection) => {
      const { defaultEdgeOptions, onConnect: onConnectAction, hasDefaultEdges } = store.getState();

      const edgeParams = {
        ...defaultEdgeOptions,
        ...params,
      };
      if (hasDefaultEdges) {
        const { edges } = store.getState();
        store.setState({ edges: addEdge(edgeParams, edges) });
      }

      onConnectAction?.(edgeParams);
      onConnect?.(edgeParams);
    };

    const onMouseDownHandler = (event: ReactMouseEvent<HTMLDivElement>) => {
      if (event.button === 0) {
        handleMouseDown({
          event,
          handleId,
          nodeId,
          onConnect: onConnectExtended,
          isTarget,
          getState: store.getState,
          setState: store.setState,
          isValidConnection,
        });
      }
      onMouseDown?.(event);
    };

    const onClick = (event: ReactMouseEvent) => {
      const { onClickConnectStart, onClickConnectEnd, connectionMode } = store.getState();
      if (!connectionStartHandle) {
        onClickConnectStart?.(event, { nodeId, handleId, handleType: type });
        store.setState({ connectionStartHandle: { nodeId, type, handleId } });
        return;
      }

      const doc = getHostForElement(event.target as HTMLElement);
      const { connection, isValid } = isValidHandle(
        {
          nodeId,
          id: handleId,
          type,
        },
        connectionMode,
        connectionStartHandle.nodeId,
        connectionStartHandle.handleId || null,
        connectionStartHandle.type,
        isValidConnection,
        doc
      );

      if (isValid) {
        onConnectExtended(connection);
      }

      onClickConnectEnd?.(event as unknown as MouseEvent);

      store.setState({ connectionStartHandle: null });
    };

    return (
      <div
        data-handleid={handleId}
        data-nodeid={nodeId}
        data-handlepos={position}
        data-id={`${nodeId}-${handleId}-${type}`}
        className={cc([
          'react-flow__handle',
          `react-flow__handle-${position}`,
          'nodrag',
          noPanClassName,
          className,
          {
            source: !isTarget,
            target: isTarget,
            connectable: isConnectable,
            connecting:
              connectionStartHandle?.nodeId === nodeId &&
              connectionStartHandle?.handleId === handleId &&
              connectionStartHandle?.type === type,
          },
        ])}
        onMouseDown={onMouseDownHandler}
        onClick={connectOnClick ? onClick : undefined}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Handle.displayName = 'Handle';

export default memo(Handle);
