import React from 'react';
// Here we import the Section.css file to grant access to some additional classNames
import '../../styles/Section.css';

// TODO: Create a styles object called "styles"

function Section() {
  // TODO: Add a style attribute to `section`
  return (
    <section className="section">
      <h2>A Summary</h2>
      <p>
      First and most importantly, I am an apprentice of Jesus. Next comes my beloved family, 
      I have a wonderful wife Heidi and sons Daxton and Rhett. I am a passionate maker and 
      tinkerer. Whether I am learning to slow down through leather craft or fixing something 
      for a friend, I love the feel of tools in my hands. I believe this translates perfectly 
      to the next chapter in my life which is web development. As I push through the new 
      learning curve I notice lessons that I have learned many times before through different 
      struggles and trials. Lastly, I am a learner, always reading and trying new things to 
      “See what happens when…”.
      </p>
    </section>
  );
}

export default Section;
