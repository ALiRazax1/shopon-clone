import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Navbara } from './components/navbar';
import { MobileCards } from './components/cards';
import ImageCarousel from './components/slider';
import { MenuCard } from './components/menu';
const MobileCardsData = [{
  image: "/mobile_images/Apple-iPhone-14-Plus-6.jpg",
  description: "Apple iPhone 14 Plus-6",
  price: "Rs.1,40,000"

},{
  image: "/mobile_images/Apple-iPhone-14-Plus.jpg",
  description: "Apple iPhone 14 Plus",
  price: "Rs.1,40,000"

},{image:"/mobile_images/samsung-galaxy-a13-pakistan-priceoye-o6gzw - Copy.jpg",
  description:"samsung-galaxy-a13-pakistan",
  price:"Rs.123457"},{
    image:"/mobile_images/samsung-galaxy-a33-pakistan-priceoye-ylulk - Copy.jpg",
  description:"samsung-galaxy-a33-pakistan",
  price:"Rs.123457"
  },{
    image:"/mobile_images/samsung-galaxy-s23-ultra-pakistan-priceoye-ndm7s-500x500 - Copy.jpg",
  description:"samsung-galaxy-s23-ultra-pakistan",
  price:"Rs.123457"
  },{
    image:"/mobile_images/Samsung-Galaxy-A13-Awesom-Blue-7 - Copy.png",
    description:"Samsung-Galaxy-A13-Awesom-Blue-7",
    price:"Rs.123457"
  }]
  const banner =[
   "/banner_images/Solar_componenets.png","/banner_images/special_offer_di3y-ni.gif","/banner_images/special_offer.png","/banner_images/Untitled_design.png","/banner_images/xbox_gift_card_main.png","/banner_images/xbox_Gift_cards__1_.png","/banner_images/xbox_Gift_cards__2_.png","/banner_images/xbox_Gift_cards__3_.png"
  ]
  const menuImages =[{image:"/menu_images/electonics.png",category:"Electronic"},{image:"/menu_images/fashion.png",category:"Fasion"},{image:"/menu_images/gift-card.png",category:"Gift Cards"},{image:"/menu_images/grocery.png",category:"Grocery"},{image:"/menu_images/home-decor-item.png",category:"Home Decor"},{image:"/menu_images/mobile-&-tablets.png",category:"Mobile"},{image:"/menu_images/new-on-shopon.png",category:"New on Shopon"}]
function App() {
  return (
    <>
    <Navbara/>
    <Container fluid="xxl"><ImageCarousel banners={banner}/></Container>
    {/* <Container style={{height:"150px"}} className='d-flex text-center' fluid= "xxl"> {
          menuImages.map((value , index)=>{
            return (
              
                <MobileCards key={index} MobileImage={value.image} MobileDescription={value.category} />
          
            )
          })
        }</Container> */}

<Container className='d-flex'>{
          menuImages.map((value , index)=>{
            return (
              
               <MenuCard key={index} menuImage={value.image} category={value.category}/>
          
            )
          })
        }</Container>

     { <Container fluid="xxl" className='mt-5'> <Row className='g-1'>
      
        {
          MobileCardsData.map((value , index)=>{
            return (
              <Col  key={index}  lg={3} md={4} sm={6} xs={12}  >
                <MobileCards MobileDescription={value.description} MobileImage={value.image} Price={value.price} />
              </Col>
            )
          })
        }
      </Row> </Container>}
   
     
    </>
  );
}

export default App;
