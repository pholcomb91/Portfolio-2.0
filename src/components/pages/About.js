import React from 'react';
import me from '../../assets/me.JPG';

const styles = {
  card: {
      border: '2px solid #ceac80',
      width: '80%',
      borderRadius: '10px',
      boxShadow: '4px 1px 4px #415971'

  },
  cardBody: {
    backgroundColor: '#ceac80'
  }
}

function About() {
  
  return (
    <div className='d-flex justify-content-center'>
      <div className="text-center card m-3" style={styles.card}>
      <img src={me} class="card-img-top" alt="Peter in workshop"></img>
        <div className="card-body rounded-bottom" style={styles.cardBody}>
          <h5 className="card-title" style={styles.cardBody}>A Summary</h5>
          <p className="card-text" style={styles.cardBody}>First and most importantly, I am an apprentice of Jesus. Next comes my beloved family, 
        I have a wonderful wife Heidi and sons Daxton and Rhett. I am a passionate maker and 
        tinkerer. Whether I am learning to slow down through leather craft or grinding through a tough repair 
        for a friend, I love the feel of tools in my hands. I believe this translates perfectly 
        to the next chapter in my life which is web development and the variety of tools found therein. As I push through the new 
        learning curve, I notice lessons being applied that I have learned many times before through different 
        struggles and trials. Lastly, I am a learner, always reading and trying new things to 
        “See what happens when…”.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
