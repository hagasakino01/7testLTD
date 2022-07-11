import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useParams,  } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './inCountry.css'
import { getCountry } from '../../features/country/countrySlice';

function InCountry() {
  
    const isDark = useSelector((state) => state.country.isDark)

    const dispatch =useDispatch()
    const navigate = useNavigate()


    const [country, setCountry] = useState([])
    const [key, setKey] = useState()
    const [key2,setKey2] = useState()
    const [key3,setKey3] = useState()
    const [boder,setBoder] = useState()
    const [loading,setLoading] =useState(false)

    const onHandleSetKey = () => {
        if (country.length !== 0) {
            let localKey = Object.keys(country[0]?.languages)[0]
            setKey(country[0]?.name.nativeName[localKey])
            setKey3(country[0]?.languages[localKey])
        }
    }

    useEffect(() => {
        if (country.length !== 0) {
            onHandleSetKey()
        }
    }, [country])

    const onHandleSetKey2 = () => {
        if (country.length !== 0) {
            let localKey = Object.keys(country[0]?.currencies)[0]
            setKey2(country[0]?.currencies[localKey])
        }
    }
    
    useEffect(() => {
        if (country.length !== 0) {
            onHandleSetKey2()
        }
    }, [country])

    const onHandleSetBoder = () => {
        if (country.length !== 0) {
            setBoder(country[0]?.borders)
            

        }
    }

    useEffect(() => {
        if (country.length !== 0) {
            onHandleSetBoder()
        }
    }, [country])

    const params = useParams();
    const handleGetCountry = async () => {
        setLoading(true)
        axios.get(`https://restcountries.com/v3.1/name/${params.id}`)
            .then(function (response) {
                // handle success  
                setCountry(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);


            })
    }
    
    useEffect(() => {
        handleGetCountry()
    }, [])

    const handleBack =()=>{
        navigate('/Country')
        dispatch(getCountry([]))
    }

    return (

        <div className='container-in-ct'>
            {country.length !== 0 && country.map(e => (
                <div className={isDark&&"in-country"||'in-country-dark'}>
                    <div className='box-button-back-ct'>
                        <button className={isDark&&"button-back-ct"||'button-back-ct-dark'} onClick={()=>handleBack()}> <img className='img-icon-back-ct' src={isDark&&"https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/285822337_724000898884499_2317580986647488125_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=CqH5z8apPJoAX8vtjpV&tn=-ekbDmAWqYQ_F7VX&_nc_ht=scontent.fhan3-3.fna&oh=03_AVI3swlBqoNMvxaZUGMZ9GGmcwK7nAHELboe5T2LaXxhfg&oe=62E5B679"||'https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/286217224_1487047241748316_2721829090897165116_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=K9NSP_1pFFEAX_YPuw2&_nc_ht=scontent.fhan4-3.fna&oh=03_AVJAX9IIaGR24tobj8RPgBps1SL-W9doJjiIL-7HO6XW_Q&oe=62E89D96'} alt="" /> Back</button>
                    </div>
                    <div className='body-in-country'>
                        <div className='box-img-in-ct'>
                            <img className='img-in-ct' src={e.flags.png} alt="" />
                        </div>
                        <div className='right-in-ct'>
                            <p className={isDark&&"title-name-in-ct"||'title-name-in-ct-dark'}>{e.name.common}</p>
                            <div className={isDark&&"right-in-ct-top"||'right-in-ct-top-dark'}>
                                
                                <div className='right-in-ct-top-left'>
                                    

                                    <div className='item-in-ct'>
                                        <p className='name-item-in-ct'>Native Name:</p>
                                        <p className='value-item-in-ct'>{key?.common}</p>

                                    </div>
                                    <div className='item-in-ct'>
                                        <p className='name-item-in-ct'>Population:</p>
                                        <p className='value-item-in-ct'>{e?.population}</p>
                                    </div>
                                    <div className='item-in-ct'>
                                        <p className='name-item-in-ct'>Regio:</p>
                                        <p className='value-item-in-ct'>{e?.region}</p>
                                    </div>
                                    <div className='item-in-ct'>
                                        <p className='name-item-in-ct'>Sub Region: </p>
                                        <p className='value-item-in-ct'>{e?.subregion}</p>
                                    </div>
                                    <div className='item-in-ct'>
                                        <p className='name-item-in-ct'>Capital:</p>
                                        <p className='value-item-in-ct'>{e?.capital.toString()}</p>
                                    </div>

                                </div>
                                <div className='right-in-ct-top-right'>
                                    <div className='item-in-ct'>
                                        <p className='name-item-in-ct'>Top Lever Domain:</p>
                                        <p className='value-item-in-ct'>{e.tld.toString()}</p>
                                    </div>
                                    <div className='item-in-ct'>
                                        <p className='name-item-in-ct'>Currencies: </p>
                                        <p className='value-item-in-ct'>{key2?.name}</p>
                                    </div>
                                    <div className='item-in-ct'>
                                        <p className='name-item-in-ct'>Languages:</p>
                                        <p className='value-item-in-ct'>{key3}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='right-in-ct-bot'>
                                <p className={isDark&&"title-boder-in-ct"||'title-boder-in-ct-dark'}>Boder Country:</p>
                                <div className='box-button-boder-ct'>
                                    {boder&&boder.map(e=>(
                                        <div className='box-button-boder-in-ct'>
                                            <button className='button-boder-ct'  >{e}</button>
                                        </div>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {loading&&<div className="box-loading-ct">
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
            </div>}

        </div>


    )
}
export default InCountry;