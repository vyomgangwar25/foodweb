// import React, { useState } from 'react'
// import UpdateModal from './Components/UpdateModal';

// const Practice = () => {
//     // const[item,setItem]=useState()
//     // const arr=["vyom","akarsh","Akagar"]
//     // const[selectedValue,setSelectedValue]=useState()
//     const[count,setCount]=useState(5);
//     const[number,setNumber]=useState(1);
//     const clickCount=()=>{
//         console.log("count clicked")
//         setCount(count+1);
//     }
//     const clickNumber=()=>{
//         console.log("number clicked")
//         setNumber(number+1);
//     }
//     const [memo, setMemo] = useState(0);
//     const hello = () => {
//         console.log("hello..")
//     }
//     const people = [
//         { firstName: 'Jill', lastName: 'Smith', age: 43 },
//         { firstName: 'Eve', lastName: 'Jackson', age: 57 },
//         { firstName: 'John', lastName: 'Doe', age: 30 }
//     ];

//     return (
//         <div>
        
            
//             <h1>value is {memo}</h1>
//             {/* list:
//     <select name="" id="" value={item} onChange={(e)=>{setItem(e.target.value)}}>
//     <option value="A">A</option>
//     <option value="B">B</option>
//     </select>
//      {console.log("selected value is",item)}
//     {arr.map((item,ind)=>{
//         return (<>
//             <input key={ind} type="radio" name="radio" id="" value={item} onChange={(e)=>setSelectedValue(e.target.value)} />{item}
//         </>)
//     })}
//     <h1>Selected value is {selectedValue}</h1>
//     <table>
//     </table> */}
//             {/* <table className='border'>
//                 <tr className='border '>
//                     <th className='border p-3'>first Name</th>
//                     <th className='border p-3'>last name</th>
//                     <th className='border p-3'>Age</th>
//                     <th className='border p-3'>Action</th>
//                 </tr>

//                 {people.map((item, ind) => {
//                     return (<>
//                         <tr >
//                             <td className='border p-3'>{item.firstName}</td>
//                             <td className='border p-3'>{item.lastName}</td>
//                             <td className='border p-3'>{item.age}</td>
//                             <td className='update p-3'>
//                                 <button className='bg-blue-400 rounded text-white p-1 cursor-pointer '>Update</button>
//                                 <UpdateModal/>
//                             </td>
//                         </tr>
//                     </>)
//                 })}


//             </table> */}
//             {/* <table class="border border-gray-400">
//                 <tr>
//                     <th  class="border border-gray-300 px-4 py-2">firstName</th>
//                     <th className='border  border-gray-300 px-4 py-2 '>LastName</th>
//                     <th class="border border-gray-300 px-4 py-2">Age</th>
//                 </tr>
//                 <tr>
//                      <td className='border  border-gray-300 px-4 py-2' rowSpan={2}>Vyom Papa</td>
//                      <td className='border  border-gray-300 px-4 py-2"'>Gangwar</td>
//                     <td class="border border-gray-300 px-4 py-2">43</td>
//                 </tr>
//                 <tr>
                    
//                     <td class="border border-gray-300 px-4 py-2">Jackson</td>
//                     <td class="border border-gray-300 px-4 py-2">57</td>
//                 </tr>
//             </table> */}

//       <h1>Number{" "+number}</h1>
//       <h1>Count{" "+count}</h1>  
//       <br />
//       <button onClick={clickCount}  >Count</button>
//       <br />
//       <button onClick={clickNumber}  >Number</button>

//         </div>
//     )
// }

// export default Practice
