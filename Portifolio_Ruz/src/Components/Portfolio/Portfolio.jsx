import React from 'react'
import './Portfolio.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
const Portfolio = () => {
  return (
    <div id="work" className='mywork'>
        <div className="mywork-title">
            <h1>Meus últimos trabalhos</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return <div className="inside">
                    <img key={index} src={work.w_img} alt="" className='mywork-img' />
                    <h2 key={index}>{work.w_name}</h2>
                    <p key={index}>{work.w_desc}</p>
                </div>
                
            })}
        </div>
        <div className="mywork-showmore">
            <p>Ver Mais</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Portfolio