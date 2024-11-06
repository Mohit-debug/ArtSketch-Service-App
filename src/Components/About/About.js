import React from 'react';
import profileImage from '../../assets/profile.png'; 

const About = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row items-center lg:items-center pt-20 py-4 space-y-4 lg:space-y-0 lg:space-x-4 px-4 lg:px-16">
      <div className="profile flex-shrink-0 w-full lg:w-1/4 pt-1/4">
        <img src={profileImage} alt="Profile" className="w-full h-auto object-cover" />
      </div>
      <div className="text w-full lg:w-1/2 px-4">
        <p>Hey hey! 👋</p>
        <br />
        <p>I'm Aman, a passionate and talented sketch artist with a keen eye for detail and a deep love for capturing the world on paper. 🎨 My journey into the art of sketching began at a young age, inspired by the beauty of everyday moments and the stories they tell. As a child, I would spend hours observing my surroundings and translating them into drawings, fascinated by the way a simple pencil could bring life to a blank page.</p>
        <br />
        <p>With a unique style that blends realism with a touch of whimsy, my sketches bring to life a wide range of subjects, from serene landscapes and bustling cityscapes to intricate portraits and imaginative creatures. Each piece I create reflects my emotions and perspectives, aiming to evoke a sense of wonder and connection in the viewer. 🌟</p>
        <br />
        <p>Over the years, I have developed a unique style that blends realism with a touch of whimsy. My sketches encompass a wide range of subjects, from serene landscapes and bustling cityscapes to intricate portraits and imaginative creatures. Each piece I create is a reflection of my commitment to capturing the essence of the world through the delicate strokes of a pencil. 🖋️</p>
        <br />
        <p>I am dedicated to continuous learning and artistic growth, constantly exploring new techniques and mediums to enhance my skills. Whether experimenting with different types of pencils, charcoal, or digital tools, I strive to push the boundaries of my creativity. This journey of artistic exploration keeps my work fresh and innovative and allows me to discover new ways to express myself. 🚀</p>
        <br />
        <p>One of the most rewarding aspects of being a sketch artist is the opportunity to work on commissioned pieces. Collaborating with clients to bring their visions to life is a fulfilling experience that challenges me to adapt and grow. Each commission is a unique project that demands a tailored approach, and I take great pride in delivering artwork that resonates with my clients on a personal level. 🤝</p>
        <br />
        <p>In addition to commissioned work, I enjoy creating personal projects that reflect my interests and passions. These projects often serve as a form of self-expression and a way to explore themes that resonate with me. Whether it's capturing the delicate beauty of nature or delving into the depths of human emotion, my personal sketches are a testament to my commitment to capturing the essence of the world through the delicate strokes of a pencil. 🖼️</p>
        <br />
        <p>Art has always been more than just a hobby for me; it's a way of life. Through my sketches, I aim to share my vision of the world and inspire others to see the beauty in everyday moments. Thank you for taking the time to learn about my journey as a sketch artist. I look forward to sharing my art with you and continuing to explore the limitless possibilities of creativity. 🌍✨</p>
        <br />
        <p>A big thanks to everyone who supported and encouraged me to create. I never thought this could be possible with social media platforms! But even the challenges from fellow artists gave me such an inspirational kick I never thought I needed. Thank you, guys, again and again! ❤️🤗</p>
      </div>
    </div>
  );
};

export default About;
