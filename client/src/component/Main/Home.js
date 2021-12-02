import React,{Fragment} from 'react'
import { useSelector } from "react-redux";
import Landing from './Landing'
import Root from './Root'



const Home = (children) => {
  console.log('children',children)
  const isAuth = useSelector(state=>state.auth.isAuth)
  //Rootコンポーネントに描画する子要素があるか判定
  const content = Object.keys(children).length === 0 && children.constructor === Object;
  
  return (
    <Fragment>
    {/* ログイン後の'/'の画面 */}
    {isAuth&& content &&(
      <Root/>
    )}
    {/* ログイン後の'/'以外の画面 */}
    {isAuth && !content&&(
      <Fragment>{children}</Fragment>      
    )}

    {/* ログイン前の画面 */}
    {!isAuth&& content&&(
      <Landing/>
    )}
    </Fragment>
  )
}

export default Home



