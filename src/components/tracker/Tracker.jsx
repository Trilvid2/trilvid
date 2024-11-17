import React, { useState, useEffect} from 'react'
import './trace.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FiSearch } from 'react-icons/fi';
import Swal from 'sweetalert2';
import Loader from '../../pages/Loader';

const Tracker = ({route}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [details, setDetails] = useState(false);
  const [thisPage, setThisPage] = useState(false);
  const [activepage, setActivepage] = useState(true);

  const [product, setProduct] = useState();
  const [min, setmin] = useState();
  const [max, setmax] = useState();
  const [gprice, setgprice] = useState();
  const [nprice, setnprice] = useState();
  const [scommission, setscommission] = useState();
  const [bcommission, setbcommission] = useState();
  const [loader, setLoader] = useState(false)


 
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  const handleSearch = async () => {
    setLoader(true) 
      const req = await fetch(`${route}/api/getorder`, 
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        trackid:searchQuery
      })
    }
    )
    const res = await req.json()
      if (res.status === 200) {
        setActivepage(false)
        setDetails(true)
        console.log(res)

        setLoader(false)
        Swal.fire({
          icon: 'success',
          title: 'Valid ID'
        })
        setProduct(res.order.product)
        setmin(res.order.min)
        setmax(res.order.max)
        setgprice(res.order.gprice)
        setnprice(res.order.nprice)
        setscommission(res.order.scommission)
        setbcommission(res.order.bcommission)

      } 
      else if (res.status === 400) {
        setLoader(false)
        Swal.fire({
          icon: 'error',
          title: `${res.message}`
        })

        setActivepage(true)
        setDetails(false)
      } 
      else  {
        setLoader(false)
        Swal.fire({
          icon: 'error',
          title: `${res.message}`
        })
      }
    //   setActivepage(true)
    //   setDetails(false)
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      {!thisPage && (
        <div className="alljobs thispg">
            {loader && <Loader />}
          <Header />

          <div className="searchbox">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <span>
                <input
                  type="search"
                  name="searchme"
                  id="search"
                  placeholder="Enter Contract No/ Reference ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={handleKeyUp}
                />
                <button type="submit">
                  <FiSearch />
                </button>
              </span>
            </form>


          </div>

          <div className="jobContain">

                {activepage && 
            <div className="joblist">

              <span>please enter tracking ID to track your shipment </span>
                <img src="/404.jpg" alt="" />
                <div className="spaceimg"></div>

            </div>
            
            }

            {
                details && 
                <div className="joblist">
            <div className="spaceme"></div>
                    
            <div className="containDetails">
                
                {/* <section>
                    <p>
                        more details
                    </p>
                </section> */}
                
                <div className='rowme'>
                    <section>
                        <b>Product Name:</b>
                        <p>
                            {product}
                        </p>
                    </section>
                
                    <section>
                        <b>Min Quantity:</b>
                        <p>
                            ${min}
                        </p>
                    </section>
                
                    <section>
                        <b>Max Quantity:</b>
                        <p>
                            ${max}
                        </p>
                    </section>
                
                    <section>
                        <b>Gross Price:</b>
                        <p>
                            ${gprice}
                        </p>
                    </section>
                
                    <section>
                        <b>Net Price:</b>
                        <p>
                            ${nprice}
                        </p>
                    </section>
                
                    <section>
                        <b>Seller Commission:</b>
                        <p>
                            ${scommission}
                        </p>
                    </section>
                
                    <section>
                        <b>Buyer Commission:</b>
                        <p>
                            ${bcommission}
                        </p>
                    </section>
                
               
                </div>
                

            </div>
            <div className="spaceme"></div>

                </div>
            }
          </div>

          <Footer />
        </div>
      )}

    </>
  );
};

export default Tracker;
