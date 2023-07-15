import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row ">
                <div className="col-md-6 contact pt-1 d-md-block d-lg-flex d-flex">
                    <div className="contact__icon me-2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" stroke-width="1.5" stroke="#909010" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="contact__info">
                        <a href="tel:+919557914389">+91 9557914389</a>
                        <p>Mon-Sat 9am-10pm</p>
                    </div>
                </div>
                <div className="col-md-6 contact pt-1 d-md-block d-lg-flex d-flex">
                    <div className="contact__icon me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24" stroke-width="1.5" stroke="#909010" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="3 9 12 15 21 9 12 3 3 9"></polyline>
                        <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
                        <line x1="3" y1="19" x2="9" y2="13"></line>
                        <line x1="15" y1="13" x2="21" y2="19"></line>
                        </svg>
                    </div>
                    <div className="contact__info">
                        <a href="mailto:email@email.com">email@gmail.com</a>
                        <p>Online support</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="f-social">
            <div className="container">
                <div className="row py-4 text-center text-white mx-auto">
                    <div className="col-lg-5 fw-bold">Connect with us on social media</div>
                    <div className="col-lg-7 mt-3 mt-lg-0">
                        <a href="https://www.instagram.com/wearegrowigh/" target="_blank" rel="noopener noreferrrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/wearegrowigh/" target="_blank" rel="noopener noreferrrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/company/growigh" target="_blank" rel="noopener noreferrrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/WeareGrowigh" target="_blank" rel="noopener noreferrrer"><i className="fab fa-twitter"></i></a>
                        
                    </div>
                </div>
            </div>
        </div> */}

        <div className="container">
            <div className="row text-white justify-content-center mt-4">
                <div className="col-md-4">
                    <h3 className="fw-bold">Leather & Linen</h3>
                    <hr className="d-block mb-md-2 f-inline mt-3" />
                    <h4 className="lh-lg pe-lg-2">Corporate gifting</h4>
                </div>

                <div className="col-md-4">
                    <h4 className="fw-bold">Our Products</h4>
                    <hr className="d-block mb-md-3 f-inline" />
                    <ul className="f-list">
                        <li><a href="#service-1">Bottles/Tumbler/Shaker/Sipper</a></li>
                        <li><a href="#service-2">Tote Bag/Bagpack/Office Bag</a></li>
                        <li><a href="#service-3">Round Neck/Collar t-shirt</a></li>
                    </ul>
                </div>
                
                <div className="col-md-4">
                    <h4 className="fw-bold">Address</h4>
                    <hr className="d-block mb-md-2 f-inline mt-3" />
                    <p className="lh-lg pe-lg-2"><a href="https://goo.gl/maps/8CjjoQL2qvrH2cig6" target="_blank" rel="noopener noreferrrer">New Delhi, INDIA</a></p>
                </div>
                
            </div>
        </div>

        <div className="f-bt">
            <div className="container">
                <div className="row text-center text-white pt-3 pb-3">
                    <div className="col-12 mt-2 mb-2 mt-sm-3 mb-sm-3 ">
                        <div className="f-bt-cpyrt">Leather & Linen </div>
                        <div className="mt-3">
                            <a className="growigh" href="https://www.growigh.com" target="_blank" rel="noopener noreferrrer">Made with <abbr title="She blocked me">💔😭</abbr> by<span className="ps-2 growigh__name">Gro<span className="growigh__w">w</span>igh</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a className="whatsapp-button shadow rounded-circle" href="https://api.whatsapp.com/send/?phone=919557914389&text&app_absent=0" target="_blank" rel="noopener noreferrrer">
            <FontAwesomeIcon className="icon-whatsapp" icon={faWhatsapp} />
        </a>

        <a className="btt shadow btn-primary rounded-circle" href="#header">
            <FontAwesomeIcon className="icon-chevron-up" icon={faChevronUp} />
        </a>
    </footer>
  )
}