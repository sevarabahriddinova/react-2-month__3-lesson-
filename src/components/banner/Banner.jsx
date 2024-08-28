import { Container } from '../../utils';
import { useSelector } from 'react-redux';
 
const Banner = () => {
  
    const data = useSelector(state=>state.searchData);
    console.log(data)

   

  return (
   <Container>
     <div className='bg-banner bg-cover bg-center rounded-[20px] h-[400px] mt-[50px] overflow-hidden'>
     <div className='bg-linear-color w-full h-full'>
       {
        data && 
       
             <h1 className='text-9xl'>City: {data.location.name}</h1>
       }
    </div>
    </div>

      
   </Container>
  )
}

export default Banner

// https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=Tashkent&days=7&aqi=yes&alerts=yes