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
            <td>Keynote Lecture</td>
        </tr>
        <tr>
            <td>10:30 am - 10:45 am</td>
            <td>tea break</td>
        </tr>
        <tr>
            <td>10:45 am - 12:45 pm</td>
            <td>posterama(Poster representation)</td>
        </tr>
        <tr>
            <td>10:45 am - 12:45 pm</td>
            <td>logic labyrinth(Circuit/Model representation)</td>
        </tr>
        <tr>
            <td>10:45 am - 6:00 pm</td>
            <td>HackSphere(Hackathon)</td>
        </tr>
        <tr>
            <td>12:45 pm - 2:00 pm</td>
            <td>Lunch Break</td>
        </tr>
        <tr>
            <td>3:00 pm - 4:00 pm</td>
            <td>Mindscape Rumble(technical Quiz)</td>
        </tr>
        <tr>
            <td>4:00 pm - 5:00 pm</td>
            <td>Code Compendium(Coding Competition)</td>
        </tr>
    </table>
    <table>
    <tr>
    <th rowSpan={10} className='verticalTableHeader'>day 2 : 20.01.24</th>

        <th>Time</th>
        <th>event</th>
    </tr>
    <tr>
        <td>9:30 am - 1.00 pm</td>
        <td>Industry-Academia Conclave:
<p className='academia'>Theme:  New age Technology for Sustainable</p> <p className='academia'>Industrial Development: Journey Towards Bikshit Bharat 2047</p>
</td>
    </tr>
    <tr>
        <td>12 pm- 1.00 pm</td>
        <td>Posterama (Poster Presentation)</td>
    </tr>
    <tr>
        <td>9.30 am- 1.00 pm</td>
        <td>Hack sphere (Hackathon)</td>
    </tr>
    <tr>
        <td>12 pm- 1 pm</td>
        <td>Logic labyrinth (Circuit/ Model Presentation)</td>
    </tr>
    <tr>
        <td>12 pm- 1 pm</td>
        <td>space quiz (School Student)</td>
    </tr>
    <tr>
        <td>1 pm - 2 pm</td>
        <td>lunch break</td>
    </tr>
    <tr>
        <td>2 pm - 4 pm</td>
        <td>byte bounty (treasure hunt)</td>
    </tr>
    <tr>
        <td>4 pm - 5:30 pm</td>
        <td>cultural programme</td>
    </tr>
    <tr>
        <td>5:30 pm - 6:30 pm</td>
        <td>Valedictory Ceremony</td>
    </tr>
</table>
</Box>
  )
}

export default Table