import React from 'react'
import APP from "../images/apPic.png"
import sisters from '../images/people.jpg'

function About() {
    return (
        <div className='font'>
            <img src={APP} alt="logo pic" className='imgSize'></img>
            <div className="mt-5 d-flex justify-content-center">
                <p className='w-50 col-6 me-5'>Adoptable Pets is a non-profit run by three sisters who hope to make the adoption process a lasting experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at varius vel pharetra vel. Morbi leo urna molestie at. Mauris sit amet massa vitae tortor condimentum. Aliquam ut porttitor leo a diam sollicitudin tempor. Ultricies leo integer malesuada nunc. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Id faucibus nisl tincidunt eget nullam non. Nisl suscipit adipiscing bibendum est ultricies. Sed enim ut sem viverra aliquet eget sit. Libero enim sed faucibus turpis in eu mi bibendum. Egestas dui id ornare arcu odio ut sem nulla pharetra. Sapien eget mi proin sed. Faucibus purus in massa tempor nec feugiat nisl. Et tortor consequat id porta nibh venenatis cras. Felis eget velit aliquet sagittis id. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Cursus mattis molestie a iaculis. Suscipit tellus mauris a diam maecenas sed. Sit amet consectetur adipiscing elit duis. Sit amet venenatis urna cursus eget nunc scelerisque. Magna ac placerat vestibulum lectus mauris ultrices eros in. Ultrices dui sapien eget mi proin sed libero. Ac turpis egestas sed tempus urna et pharetra. Morbi blandit cursus risus at. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Diam vulputate ut pharetra sit amet aliquam id diam. Quam nulla porttitor massa id. At urna condimentum mattis pellentesque id nibh tortor id. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Pretium fusce id velit ut tortor. Sit amet luctus venenatis lectus magna. Diam volutpat commodo sed egestas egestas fringilla phasellus. At elementum eu facilisis sed odio morbi quis. Egestas sed sed risus pretium quam vulputate.</p>
                <img src={sisters} alt='business photo' className='photoSize col-6'></img>
            </div>
            <figure class="text-center margin org">
                    <blockquote class="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
            </figure>
        </div>
    )
}

export default About
