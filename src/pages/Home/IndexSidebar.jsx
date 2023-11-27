import React from 'react'
import './IndexSidebar.css'

function IndexSidebar() {
return (
    <div className='index-sidebar-container'>
        <div className="sidebar-categories">
            <section className='sidebar-cell'>
                <h4>Tags</h4>
                <ul className='sidebar-link-list'>
                    <li>Mathematics</li>
                    <li>Science</li>
                    <li>Social Studies</li>
                    <li>Geography</li>
                </ul>
            </section>
            <section className='sidebar-cell'>
                <h4>Categories</h4>
                <ul className='sidebar-link-list'>
                    <li>Popular</li>
                    <li>Top Rated</li>
                    <li>Most Recent</li>
                    <li></li>
                </ul>
            </section>
            <section className='sidebar-cell'>
                <h4>Grade</h4>
                <ul className='sidebar-link-list' id='grade-list'>
                    <li>Kindergarten</li>
                    <li>1st Grade</li>
                    <li>2nd Grade</li>
                    <li>3rd Grade</li>
                    <li>4th Grade</li>
                    <li>5th Grade</li>
                    <li>6th Grade</li>
                    <li>7th Grade</li>
                    <li>8th Grade</li>
                    <li>9th Grade</li>
                    <li>10th Grade</li>
                    <li>11th Grade</li>
                    <li>12th Grade</li>
                </ul>
            </section>
        </div>
    </div>
)
}

export default IndexSidebar