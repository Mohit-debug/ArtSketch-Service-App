import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import cartoon from '../../assets/cartoon-drawing.png';
import figure from '../../assets/figure-drawing.png';
import gesture from '../../assets/gesture-drawing.png';
import line from '../../assets/line-drawing.png';
import sketch from '../../assets/sketch-drawing.png';

const Service = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <div id="sketch-drawing" className="pt-40 sketch-drawing flex flex-col justify-center lg:flex-row items-center lg:items-center py-4 space-y-4 lg:space-y-0 lg:space-x-4 px-4 lg:px-16">
        <div className="profile flex-shrink-0 w-full lg:w-1/4 pt-1/4 ">
          <img src={sketch} alt="Profile" className="w-full h-auto object-cover" />
        </div>
        <div className="text w-full lg:w-1/2 px-4">
          <p className='text-2xl font-semibold'>Sketch drawing</p>
          <br />
          <p>You can usually tell a sketch drawing by its less-refined lines and edges and unpolished look. Artists often create sketches with simple, quick marks and may ignore adding certain details that aren't important to the piece. They are typically used to show a working concept or capture something important in a short amount of time. Specific types of sketches include:</p>
          <br />
          <p>Automotive</p>
          <br />
          <p>Media outlets use courtroom sketches in the absence of photographs or film to illustrate stories for trials and legal proceedings. Courtroom sketch artists may focus most closely on people's faces, hair or arms to show the important subjects or actions of a court proceeding. Though it's a sketch, some aspects may include a lot of detail.</p>
          <br />
          <p>Fashion</p>
          <br />
          <p>Fashion illustrations typically feature long, elongated figures meant to mimic the look of runway models. However, these figures rarely include facial features or fingers because the focus is on the designs. Fashion illustrations may have either a rough or polished look, depending on the artist. They use lines, contours and colors to create initial ideas for future wearable designs.</p>
          <br />
          <p>Interior</p>
          <br />
          <p>Interior sketches show how design ideas fit together and how they'll look in a 3D setting. Interior designers use perspective and technical drawing together to create accurately proportioned items, shading and shadows. Interior sketches may appear in black and white or in color to show how tones, fabrics or schemes work together within the room.</p>
        </div>
      </div>
      <hr className="border-dotted border-t-2 border-gray-600 my-4 w-4/5 mx-auto" />
        
      <div id="line-drawing" className="pt-20 line-drawing flex flex-col justify-center lg:flex-row items-center lg:items-center py-4 space-y-4 lg:space-y-0 lg:space-x-4 px-4 lg:px-16">
        <div className="profile flex-shrink-0 w-full lg:w-1/4 pt-1/4">
          <img src={line} alt="Profile" className="w-full h-auto object-cover" />
        </div>
        <div className="text w-full lg:w-1/2 px-4">
          <p className='text-2xl font-semibold'>Line drawing</p>
          <br />
          <p>Line drawing focuses on the use of straight lines and contours without shading. In most line drawings, the artist creates an entire image without picking their instrument up from the surface. Line drawing may teach the importance of angles and curves without putting an emphasis on detail.</p>
        </div>
      </div>
      <hr className="border-dotted border-t-2 border-gray-600 my-4 w-4/5 mx-auto" />

      <div id="gesture-drawing" className="pt-20 gesture-drawing flex flex-col justify-center lg:flex-row items-center lg:items-center py-4 space-y-4 lg:space-y-0 lg:space-x-4 px-4 lg:px-16">
        <div className="profile flex-shrink-0 w-full lg:w-1/4 pt-1/4">
          <img src={gesture} alt="Profile" className="w-full h-auto object-cover" />
        </div>
        <div className="text w-full lg:w-1/2 px-4">
          <p className='text-2xl font-semibold'>Gesture drawing</p>
          <br />
          <p>Like figure drawing, gesture drawing uses real-life subjects as inspiration. However, gesture drawing focuses on movement and hopes to capture action, form and pose. Often, models or subjects change poses every one to five minutes to enact motion. The shorter the pose, the less an artist can capture, so gesture drawings may be less detailed than other types of illustrations.</p>
        </div>
      </div>
      <hr className="border-dotted border-t-2 border-gray-600 my-4 w-4/5 mx-auto" />

      <div id="figure-drawing" className="pt-20 figure-drawing flex flex-col justify-center lg:flex-row items-center lg:items-center py-4 space-y-4 lg:space-y-0 lg:space-x-4 px-4 lg:px-16">
        <div className="profile flex-shrink-0 w-full lg:w-1/4 pt-1/4">
          <img src={figure} alt="Profile" className="w-full h-auto object-cover" />
        </div>
        <div className="text w-full lg:w-1/2 px-4">
          <p className='text-2xl font-semibold'>Figure drawing</p>
          <br />
          <p>Artists create figure drawings, also known as still-life drawings, by making observations of the physical world. Subjects are often human models, but can also include objects like fruit, vehicles or items in nature. Artists who work in figure drawing try to capture the world as they see it. Art instructors typically use figure drawing to teach fundamentals and help students learn perspective, proportions and shading.</p>
        </div>
      </div>
      <hr className="border-dotted border-t-2 border-gray-600 my-4 w-4/5 mx-auto" />

      <div id="cartoon-drawing" className="pt-20 cartoon-drawing flex flex-col justify-center lg:flex-row items-center lg:items-center py-4 space-y-4 lg:space-y-0 lg:space-x-4 px-4 lg:px-16">
        <div className="profile flex-shrink-0 w-full lg:w-1/4 pt-1/4">
          <img src={cartoon} alt="Profile" className="w-full h-auto object-cover" />
        </div>
        <div className="text w-full lg:w-1/2 px-4">
          <p className='text-2xl font-semibold'>Cartoon drawing</p>
          <br />
          <p>Cartoon drawings typically depict a more comedic or whimsical view of the world. Similar to caricatures, they may use overdramatized shapes and colors to show emotion or tone through images. Artists may use cartoons in illustrations, animation, advertising and graphic design. Some specific types of cartoons include:</p>
          <br />
          <p>Comics</p>
          <br />
          <p>Comics use cartoon-style drawing to present scenes and stories through action panels. Besides images, comics use textual devices like captions and speech bubbles to create more robust stories. They may vary in length—from a single panel to an entire book—and complexity. Some examples of comics include graphic novels and Manga, a type of comic book developed in Japan that includes anime-like characters.</p>
          <br />
          <p>Editorial</p>
          <br />
          <p>Editorial cartoons use a comics-style of panel storytelling to make a joke or comment on a topic of cultural relevance, such as politics or pop culture. They are usually only one panel long, use captions and other textual devices for clarity and are slanted toward a specific opinion.</p>
        </div>
      </div>
    </div>
  )
}

export default Service;
