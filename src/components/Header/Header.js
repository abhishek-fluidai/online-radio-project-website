import React , {useState}from 'react';
import Style from './Header.module.css'
import logo from '../../assets/img/logo.png'

const Header = (props) => {
    const [value,setValue]  = useState('');
    
	return (
		<header id={Style["Header"]}>
			<div style={{
				"display": "flex", flexDirection: "row", justifyContent: "center",
				alignItems: "center"
			}}>
				<img src={logo} alt="logo" onClick={() => "http://localhost:3000"} />
				<h2 id={Style["logo"]}>Indi-FM</h2>
			</div>
			<div className={Style["search-box"]} >
				<input 
                className={Style["search"]}     
                type="text" 
                placeholder="Search.."
                value={value} 
                onChange={e => setValue(e.target.value)}/>
				<span onClick={() => props.searcHandler(value)} >&#xbb;</span>
			</div>
		</header>

	)
}
export default Header;