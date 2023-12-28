import React from 'react'
import { Box } from '@mui/material'

function Table() {
  return (
    <Box sx={{display:"flex",flexWrap:"wrap",padding:"0 4rem",columnGap:'4rem',rowGap:"4rem",justifyContent:"center"}}>
    <table>
        <tr>
            <th rowSpan={10} className='verticalTableHeader'>day 1 : 19.01.24</th>
            <th>Time</th>
            <th>event</th>
        </tr>
        <tr>
            <td>9 am - 9:30 am</td>
            <td>inauguration</td>
        </tr>
        <tr>
            <td>9:30 am - 10:30 am</td>
            <td>technical talk</td>
        </tr>
        <tr>
            <td>10:30 am - 10:45 am</td>
            <td>tea break</td>
        </tr>
        <tr>
            <td>10:45 am - 11:45 pm</td>
            <td>posterama</td>
        </tr>
        <tr>
            <td>11:45 am - 12:45 pm</td>
            <td>logic labyrinth</td>
        </tr>
        <tr>
            <td>12:45 pm - 2 pm</td>
            <td>Lunch break</td>
        </tr>
        <tr>
            <td>2:15 pm - 4:15 pm</td>
            <td>Hack Sphere</td>
        </tr>
        <tr>
            <td>4:15 pm - 5:15 pm</td>
            <td>MindScape Rumble</td>
        </tr>
        <tr>
            <td>5:15 pm - 6:45 pm</td>
            <td>Code Compendium</td>
        </tr>
    </table>
    <table>
    <tr>
    <th rowSpan={9} className='verticalTableHeader'>day 2 : 20.01.24</th>

        <th>Time</th>
        <th>event</th>
    </tr>
    <tr>
        <td>9:30 am - 12 pm</td>
        <td>industrial academics 
conclave</td>
    </tr>
    <tr>
        <td>12 pm- 1 pm</td>
        <td>posterama</td>
    </tr>
    <tr>
        <td>12 pm- 1 pm</td>
        <td>logic labyrinth</td>
    </tr>
    <tr>
        <td>12 pm- 1 pm</td>
        <td>space quiz</td>
    </tr>
    <tr>
        <td>1 pm - 2 pm</td>
        <td>lunch break</td>
    </tr>
    <tr>
        <td>2 pm - 4 pm</td>
        <td>byte bounty</td>
    </tr>
    <tr>
        <td>4 pm - 5:30 pm</td>
        <td>cultural programme</td>
    </tr>
    <tr>
        <td>5:30 pm - 6:30 pm</td>
        <td>cultural programme</td>
    </tr>
</table>
</Box>
  )
}

export default Table