import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className=" px-16 mt-8 text-black">
      <div className="flex justify-between">
        <p className="text-5xl">LOGO</p>
        <p className="text-5xl">INVOICE</p>
      </div>

      <div className="flex justify-between mt-10">
        <div>
          <p className="font-bold">BILLED TO:</p>
          <p className="">Imane Olowe</p>
          <p className="">+2348144669906:</p>
          <p className="">63 Ivy Road Hawkville GA, USA 31036</p>
        </div>

        <div>
          <p>invoice no. 1245</p>
          <p className="px-6">16 June 2025</p>
        </div>
      </div>

      <hr className="border mt-20" />
      
        <table class="w-full border">
          <thead className="">
            <tr>
              <th className="flex justify-start mt-2 w20">Item</th>
              <th className="p- text-sm font-semibold tracking-wide text-left"> Quantity</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left"> Unity Price</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Total</th>
            </tr>
           
          </thead>
          
       
          <tbody className="border-2">
       
            <tr>
              <td className="p-3 ">The Sliding Mr</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">$123</td>
              <td className="p-3 ">$123</td>
            </tr>
          
            <tr>
              <td className="p-3 ">Witchy Woman</td>
              <td className="p-3 ">2</td>
              <td className="p-3 ">$127</td>
              <td className="p-3 ">$254</td>
              
              
            </tr>
        
            <tr>
              <td className="p-3 ">Shining Star</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">$123</td>
              <td className="p-3 ">$123</td>
            </tr>
          </tbody>

        

         
        </table>

     
      
    </div>
  );
}

export default App;
