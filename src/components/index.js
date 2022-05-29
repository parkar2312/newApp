import React,{useEffect,useState} from 'react'
import Topcard from './topcard';
import '../styling/card.css';
import Navbar_new from './navbar';

function Index() {
  const fetchURL = "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"

  const [data, setData] = useState([]); 
  const [photo, setPhoto] = useState([]);
  const [fname, setFname] = useState([]);
  const [lname, setLname] = useState([]);
  const [tname, setTname] = useState([]); 
  const [offset,setOffset] = useState([]);
  const [descrip,setDescrip] = useState([]);
  const [gender, setGender] = useState([]); 
  const [stno, setStno] = useState([]); 
  const [stname, setStname] = useState([]); 
  const [state, setState] = useState([]); 
  const [city, setCity] = useState([]); 
  const [country, setCountry] = useState([]); 
  const [postcode, setPostcode] = useState([]); 
  
  
    const getData = () =>
      fetch(`${fetchURL}`)
        .then((res) => res.json())

    useEffect(() => {
      getData().then((data) => setData(data.results))
    }, [])

console.log(data[0])
   return (
     <div className="App">
       <Navbar_new/>
       <Topcard photo={photo} fname={fname} lname={lname} tname={tname} offset={offset} descrip={descrip} 
                gender={gender} stno={stno} stname={stname} state={state} city={city} country={country} postcode={postcode} />
        <div className="App__main">
                 {/* https://www.figma.com/file/MuDp24Ezz4hJi2XoO4IIAt/Kawa-Space---Frontend-Intern-Challenge?node-id=0%3A1 */}
                {Object.values(data)?.map((item) => 
                 <div className="mainbox"  onClick={() => { setPhoto(item.picture.medium)
                                                            setFname(item.name.first) 
                                                            setLname(item.name.last)
                                                            setTname(item.name.title)
                                                            setOffset(item.location.timezone.offset)
                                                            setDescrip(item.location.timezone.description)
                                                            setGender(item.gender)
                                                            setStno(item.location.street.number)
                                                            setStname(item.location.street.name)
                                                            setState(item.location.state)
                                                            setCity(item.location.city)
                                                            setCountry(item.location.country)
                                                            setPostcode(item.location.postcode)
                                                            window.scrollTo(0, 0);
                 }}>
                  <div className="card">
                       <div className='card_div_gender'>{item.gender}</div>
                       <div className='card_div_name'>{item.name.title} {item.name.first} {item.name.last}</div>
                       <div className='card_div_email'>{item.email}</div>
                  </div>
            </div>                           
                   )} 
          
       </div>
     </div>
  )
}
export default Index