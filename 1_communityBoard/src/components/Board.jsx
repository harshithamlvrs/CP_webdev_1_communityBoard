import React from "react"
import Card from './Card';

const Board = () => {
    return (
        <div>
            <table cellSpacing="15">
                <thead>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody> 
                    <tr className="time">
                        <Card name='Electrical Engineering' color='pink' field='Engineering'/>
                        <Card name='Computer Science' color='pink' field='Engineering'/>
                        <Card name='Neuroscience' color='blue' field='Medicine'/>
                        <Card name='Supply Chain Management' color='green' field='Bussiness'/>
                        <Card name='Investment Banking' color='yellow' field='Finance'/>
                    </tr>
                    <tr>
                        <Card name='Software Engineering' color='pink' field='Engineering'/>
                        <Card name='Graphic Designer' color='purple' field='Art'/>
                        <Card name='Cultural Resource Manager (CRM)' color='brown' field='Archeology'/>
                        <Card name='Biomedical Engineering' color='pink' field='Engineering'/>
                        <Card name='Environmental Scientist' color='pink' field='Engineering'/>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Board