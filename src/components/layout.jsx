import { NavBar } from './navbar'

export const Layout = ({children}) => {

  const containerStyle = {
    width: '90%',
    marhin: '100px auto'
  }


  return (
    <div >
        <NavBar />
        <div style={containerStyle}>
            {children}
        </div>
    </div>
  )
}
