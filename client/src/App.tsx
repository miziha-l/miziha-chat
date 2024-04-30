import React, { useCallback, useEffect } from "react"
import { getRequestTest } from "./apis"

const App: React.FC<any> = () => {
  const requestTest = useCallback(async () => {
    const res = await getRequestTest();
    console.log(res);
  }, [])
  useEffect(() => {
    requestTest();
  }, [])
  return <div>这里是首页</div>
}

export default App
