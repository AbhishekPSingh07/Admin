import React, { useEffect } from 'react'
import './Widgets.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import {collection,getDocs,query,where} from 'firebase/firestore';
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {db} from '../../firebase';
function Widgets({type}) {

    let data;
    const amount = 100;
    const diff = 20;
    switch(type){
        case "user":
            data={
                title:"USER",
                isMoney: false,
                link: "See All Users",
                icon : (
                    <PersonOutlineIcon className='icon'
                    style={{
                        color:"crimson",
                        backgroundColor:'rgba(255,0,0,.2)',
                    }}/>
                )
            };
            break;
        case "order":
            data={
                title:"ORDERS",
                isMoney: false,
                link: "See All Orders",
                icon : (
                    <ShoppingCartOutlinedIcon  className='icon'
                    style={{
                        color:"goldenrod",
                        backgroundColor:'rgba(218,165,32,.2)',
                    }}/>
                )
            };
            break;
        case "earning":
            data={
                title:"EARNINGS",
                isMoney: true,
                link: "View Net Earnings",
                icon : (
                    <MonetizationOnOutlinedIcon className='icon'
                    style={{
                        color:"green",
                        backgroundColor:'rgba(0,128,0,.2)',
                    }}/>
                )
            };
            break;
        case "balance":
            data={
                title:"Balance",
                isMoney: true,
                link: "View Balance",
                icon : (
                    <AccountBalanceWalletIcon className='icon'
                    style={{
                        color:"purple",
                        backgroundColor:'rgba(128,0,128,.2)',
                    }}/>
                )
            };
            break;       
        default:
            break;
    }
    useEffect(()=>{
        const fetchData = async()=>{
            const today = new Date();
            const lastMonth = new Date().setMonth(today.getMonth()-1);
            const prevMonth = new Date().setMonth(today.getMonth()-2);

            const lastMonthQuery = query(
                collection(db,"user"),
                where("timestamp","<=",today),
                where("timestamp",">=",lastMonth)
            );
            const prevMonthQuery = query(
                collection(db,"user"),
                where("timestamp","<="),
                where("timestamp",">=",lastMonth)
            );
            const lastMonthData = await getDocs(lastMonthQuery);
            const prevMonthData = await getDocs(prevMonthQuery);
              
        }
        fetchData()
    },[])
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"}{amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
            <KeyboardArrowUpIcon/>
            {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets
