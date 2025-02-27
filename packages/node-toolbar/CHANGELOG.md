# @reactflow/node-toolbar

## 1.1.8

### Patch Changes

- Updated dependencies [[`72216ff6`](https://github.com/wbkd/react-flow/commit/72216ff62014acd2d73999053c72bd7aeed351f6), [`959b1114`](https://github.com/wbkd/react-flow/commit/959b111448bba4686040473e46988be9e7befbe6), [`0d259b02`](https://github.com/wbkd/react-flow/commit/0d259b028558aab650546f3371a85f3bce45252f), [`f3de9335`](https://github.com/wbkd/react-flow/commit/f3de9335af6cd96cd77dc77f24a944eef85384e5), [`23424ea6`](https://github.com/wbkd/react-flow/commit/23424ea6750f092210f83df17a00c89adb910d96), [`021f5a92`](https://github.com/wbkd/react-flow/commit/021f5a9210f47a968e50446cd2f9dae1f97880a4)]:
  - @reactflow/core@11.5.5

## 1.1.7

### Patch Changes

- Updated dependencies [[`383a074a`](https://github.com/wbkd/react-flow/commit/383a074aeae6dbec8437fa08c7c8d8240838a84e)]:
  - @reactflow/core@11.5.4

## 1.1.6

### Patch Changes

- Updated dependencies [[`be8097ac`](https://github.com/wbkd/react-flow/commit/be8097acadca3054c3b236ce4296fc516010ef8c), [`1527795d`](https://github.com/wbkd/react-flow/commit/1527795d18c3af38c8ec7059436ea0fbf6c27bbd), [`3b6348a8`](https://github.com/wbkd/react-flow/commit/3b6348a8d1573afb39576327318bc172e33393c2)]:
  - @reactflow/core@11.5.3

## 1.1.5

### Patch Changes

- [#2792](https://github.com/wbkd/react-flow/pull/2792) [`d8c679b4`](https://github.com/wbkd/react-flow/commit/d8c679b4c90c5b57d4b51e4aaa988243d6eaff5a) - Accept React 17 types as dev dependency

- Updated dependencies [[`d8c679b4`](https://github.com/wbkd/react-flow/commit/d8c679b4c90c5b57d4b51e4aaa988243d6eaff5a)]:
  - @reactflow/core@11.5.2

## 1.1.4

### Patch Changes

- Updated dependencies [[`71153534`](https://github.com/wbkd/react-flow/commit/7115353418ebc7f7c81ab0e861200972bbf7dbd5)]:
  - @reactflow/core@11.5.1

## 1.1.3

### Patch Changes

- Updated dependencies [[`e96309b6`](https://github.com/wbkd/react-flow/commit/e96309b6a57b1071faeebf7b0547fef7fd418694), [`85003b01`](https://github.com/wbkd/react-flow/commit/85003b01add71ea852bd5b0d2f1e7496050a6b52), [`4c516882`](https://github.com/wbkd/react-flow/commit/4c516882d2bbf426c1832a53ad40763cc1abef92)]:
  - @reactflow/core@11.5.0

## 1.1.2

### Patch Changes

- [#2741](https://github.com/wbkd/react-flow/pull/2741) [`e2aff6c1`](https://github.com/wbkd/react-flow/commit/e2aff6c1e4ce54b57b724b2624367ee5fefd1c39) - chore(dependencies): update and cleanup

- Updated dependencies [[`e34a3072`](https://github.com/wbkd/react-flow/commit/e34a30726dc55184f59adc4f16ca5215a7c42805), [`e2aff6c1`](https://github.com/wbkd/react-flow/commit/e2aff6c1e4ce54b57b724b2624367ee5fefd1c39)]:
  - @reactflow/core@11.4.2

## 1.1.1

### Patch Changes

- Updated dependencies [[`82988485`](https://github.com/wbkd/react-flow/commit/82988485b730a9e32acbdae1ddcc81b33ddccaba), [`d91e619a`](https://github.com/wbkd/react-flow/commit/d91e619a70a95db99a621ede59bc05b5a7766086)]:
  - @reactflow/core@11.4.1

## 1.1.0

### Patch Changes

- [#2660](https://github.com/wbkd/react-flow/pull/2660) [`50032c3d`](https://github.com/wbkd/react-flow/commit/50032c3d953bd819d0afe48e4b61f77f987cc8d0) - Add `getNodes` function to the store so that you don't need to do `Array.from(store.getState().nodeInternals.values())` anymore.

- Updated dependencies [[`ab2ff374`](https://github.com/wbkd/react-flow/commit/ab2ff3740618da48bd4350597e816c397f3d78ff), [`50032c3d`](https://github.com/wbkd/react-flow/commit/50032c3d953bd819d0afe48e4b61f77f987cc8d0), [`baa8689e`](https://github.com/wbkd/react-flow/commit/baa8689ef629d22da4cbbef955e0c83d21df0493), [`4244bae2`](https://github.com/wbkd/react-flow/commit/4244bae25a36cb4904dc1fbba26e1c4d5d463cb9), [`7ef29108`](https://github.com/wbkd/react-flow/commit/7ef2910808aaaee029894363d52efc0c378a7654), [`23afb3ab`](https://github.com/wbkd/react-flow/commit/23afb3abebdb42fad284f68bec164afac609563c)]:
  - @reactflow/core@11.4.0

## 1.1.0-next.1

### Minor Changes

- panOnDrag: Use numbers for prop ([1,2] = drag via middle or right mouse button)
  selection: do not include hidden nodes
  minimap: fix onNodeClick for nodes outside the viewport
  keys: allow multi select when input is focused

### Patch Changes

- Updated dependencies []:
  - @reactflow/core@11.4.0-next.1

## 1.1.0-next.0

### Minor Changes

- [#2678](https://github.com/wbkd/react-flow/pull/2678) [`baa8689e`](https://github.com/wbkd/react-flow/commit/baa8689ef629d22da4cbbef955e0c83d21df0493) Thanks [@moklick](https://github.com/moklick)! - ## New Features

  New props for the ReactFlow component to customize the controls of the viewport and the selection box better:

  1. `selectionOnDrag` prop: Selection box without extra button press (need to set `panOnDrag={false} or `panOnDrag="RightClick"`)
  2. `panOnDrag="RightClick"` option
  3. `panActivationKeyCode="Space"` key code for activating dragging (useful when using `selectionOnDrag`)
  4. `selectionMode={SelectionMode.Full}`: you can chose if the selection box needs to contain a node fully (`SelectionMode.Full`) or partially (`SelectionMode.Partial`) to select it
  5. `onSelectionStart` and `onSelectionEnd` events

### Patch Changes

- [#2660](https://github.com/wbkd/react-flow/pull/2660) [`50032c3d`](https://github.com/wbkd/react-flow/commit/50032c3d953bd819d0afe48e4b61f77f987cc8d0) Thanks [@moklick](https://github.com/moklick)! - Add `getNodes` function to the store so that you don't need to do `Array.from(store.getState().nodeInternals.values())` anymore.

- Updated dependencies [[`50032c3d`](https://github.com/wbkd/react-flow/commit/50032c3d953bd819d0afe48e4b61f77f987cc8d0), [`baa8689e`](https://github.com/wbkd/react-flow/commit/baa8689ef629d22da4cbbef955e0c83d21df0493), [`4244bae2`](https://github.com/wbkd/react-flow/commit/4244bae25a36cb4904dc1fbba26e1c4d5d463cb9), [`23afb3ab`](https://github.com/wbkd/react-flow/commit/23afb3abebdb42fad284f68bec164afac609563c)]:
  - @reactflow/core@11.4.0-next.0

## 1.0.2

### Patch Changes

- [#2626](https://github.com/wbkd/react-flow/pull/2626) [`d29c401d`](https://github.com/wbkd/react-flow/commit/d29c401d598dbf2dcd5609b7adb8d029906a6f18) - Get nodeId from React Flow context if it is not passed explicitly as prop

- Updated dependencies [[`e6b5d90f`](https://github.com/wbkd/react-flow/commit/e6b5d90f61c8ee60e817bba232a162cae2ab3e2a), [`6ee44e07`](https://github.com/wbkd/react-flow/commit/6ee44e076eaa6908d07578a757a5187642b732ae), [`aa69c207`](https://github.com/wbkd/react-flow/commit/aa69c20765e6978f4f9c8cc63ed7110dbf6d9d9d), [`d29c401d`](https://github.com/wbkd/react-flow/commit/d29c401d598dbf2dcd5609b7adb8d029906a6f18), [`0df02f35`](https://github.com/wbkd/react-flow/commit/0df02f35f8d6c54dae36af18278feadc77acb2d6)]:
  - @reactflow/core@11.3.2

## 1.0.1

### Patch Changes

- [#2594](https://github.com/wbkd/react-flow/pull/2594) [`ec94d9ec`](https://github.com/wbkd/react-flow/commit/ec94d9ecdc964d6d66c04e9242f195614bbfdbbe) Thanks [@chrtze](https://github.com/chrtze)! - Allow multiple node ids to be passed for enabling multi selection toolbars

- Updated dependencies [[`c828bfda`](https://github.com/wbkd/react-flow/commit/c828bfda0a8c4774bc43588640c7cca0cfdcb3f4), [`b0302ce4`](https://github.com/wbkd/react-flow/commit/b0302ce4261a992bee841bae84af347d03be690f), [`b2c72813`](https://github.com/wbkd/react-flow/commit/b2c728137d1b53e38883f044fa447585c377a6af)]:
  - @reactflow/core@11.3.1

## 1.0.0

### Major Changes

- [#2563](https://github.com/wbkd/react-flow/pull/2563) [`98116d43`](https://github.com/wbkd/react-flow/commit/98116d431f9fcdcc9b23a5b606a94ec0740b64cd) Thanks [@chrtze](https://github.com/chrtze)! - Export a new component "NodeToolbar" that renders a fixed element attached to a node
