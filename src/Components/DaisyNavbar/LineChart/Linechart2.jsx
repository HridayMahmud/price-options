import React from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const Linechart2 = () => {
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
    <div className='mt-3 bg-slate-300 w-[600px]'>
     <LineChart width={500} height={500} data={data}>
     <Line dataKey='math' stroke='green'></Line>
     <Line dataKey='physics' stroke='red'></Line></LineChart>
    </div>
  )
}

export default Linechart2
