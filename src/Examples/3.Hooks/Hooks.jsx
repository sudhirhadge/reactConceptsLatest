import React, { useEffect, useRef } from 'react'
import UseStateApp from './1.UseStateHook/UseStateApp'
import UseCallbackApp from './2.UseCallbackHook/useCallbackApp'
import UseMemoApp from './3.UseMemoHook/1.useMemoApp'
import ClassTimer from './4.UseRefHook/2.ClassTimer'
import HookTimer from './4.UseRefHook/3.HookTimer'
import UseRefApp from './4.UseRefHook/UseRefApp'
import UseEffectHookApp from './5.UseEffectHook/UseEffectHookApp'
import UseContextApp from './6.useContext/1.UseContextApp'
import UseReducerApp from './7.UseReducerHook/0.UseReducerApp'
import FetchingDataApp from './7.UseReducerHook/5.FetchingData/0.FetchingDataApp'
import DocTitleApp from './CustomeHooks/1. Document Title/DocTitleCustomHookApp'
import CounterCustomHookApp from './CustomeHooks/2.Counter/CounterCustomHookApp'
import UseInputCustomHookApp from './CustomeHooks/3.UseInputCustomHook/UseInputCustomHookApp'
import Demo_useOptimistic from './10. useOptimistic'
import UseActionStateHook from './useActionState'

function Hooks() {
  return (
    <div>
      {/* <UseStateApp /> */}
      {/* <UseCallbackApp /> */}
      {/* <UseMemoApp /> */}
      {/* <UseRefApp /> */}
      {/* <ClassTimer />
      <HookTimer /> */}

      {/* <DocTitleApp /> */}
      {/* <CounterCustomHookApp /> */}
      {/* <UseInputCustomHookApp /> */}
      {/* <UseEffectHookApp /> */}
      {/* <UseContextApp /> */}
      {/* <UseReducerApp /> */}
      {/* <FetchingDataApp /> */}
      {/* <Demo_useOptimistic/> */}
      <UseActionStateHook />
    </div>
  )
}

export default Hooks
