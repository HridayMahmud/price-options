import React from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const Linechart = () => {
            const data =  [{ "id": 1, "name": "Alice", "physics": 85, "math": 92 },
               { "id": 2, "name": "Bob", "physics": 78, "math": 88 },
               { "id": 3, "name": "Charlie", "physics": 90, "math": 85 },
               { "id": 4, "name": "David", "physics": 82, "math": 91 },
               { "id": 5, "name": "Eva", "physics": 88, "math": 95 },
               { "id": 6, "name": "Frank", "physics": 76, "math": 84},
               { "id": 7, "name": "Grace", "physics": 89, "math": 90},
               { "id": 8, "name": "Henry", "physics": 92, "math": 87},
               { "id": 9, "name": "Isabella", "physics": 81, "math": 93},
               { "id": 10, "name": "Jack", "physics": 87, "math": 89 }
               ]
                            
  return (
    <div>
     <div className="linechart bg-blue-400 h-[500px] w-[600px] mt-7 rounded-lg ">
   
     <LineChart width={500} height={500} data={data} >
             <XAxis dataKey="name"></XAxis>
             <YAxis></YAxis>
              <Line dataKey="math" stroke='green'></Line>
               <Line dataKey='physics' stroke='yellow'></Line>
      </LineChart>
  
     </div>
    </div>
  )
}

export default Linechart
