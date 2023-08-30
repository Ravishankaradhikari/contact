import styles from './Navigation.module.css'


const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
    <div className='logo'>
        <img src="images/logo.jpg" alt="logo" width="53.2rem" height="53.2rem"/>
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <button className='login'>Login</button>
       
    </ul>
    </nav>
  )
}


export default Navigation