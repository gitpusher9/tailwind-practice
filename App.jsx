// Tailwind practice week 8 8.2
 
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  

  return (
    <div className=" grid grid-cols-4">
    <div className=' p-4'>
      <RevenueCard className="bg-blue-600" title='Next Payout' amount='13354' orderCount='25'/>
    </div>
    
    <div className=' p-4 '>
      <RevenueCard title='Next Payout' amount='13354' orderCount='25'/>
    </div>
    
    <div className=' p-4 '>
      <RevenueCard title='Next Payout' amount='13354' orderCount='25'/>
    </div>
    </div>
  )
  
}

export default App
