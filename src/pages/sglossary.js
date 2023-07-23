import React from 'react';
import "../Styles/sglossary.css";
import Navbar from '../components/Bar';

export default function Sglossary() {
  return (
    <>
    <Navbar />

      <div>
        <h1> SG-lossary </h1>
        <h2>Become an expert at SG foodie slang!</h2>
        <ul class="horizontal-nav">
          <li><a href="#A">A</a></li>
          <li><a href="#B">B</a></li>
          <li><a href="#C">C</a></li>
          <li><a href="#D">D</a></li>
          <li><a href="#E">E</a></li>
          <li><a href="#F">F</a></li>
          <li><a href="#G">G</a></li>
          <li><a href="#H">H</a></li>
          <li><a href="#I">I</a></li>
          <li><a href="#J">J</a></li>
          <li><a href="#K">K</a></li>
          <li><a href="#L">L</a></li>
          <li><a href="#M">M</a></li>
        </ul>
        <ul class="horizontal-nav">
          <li><a href="#N">N</a></li>
          <li><a href="#O">O</a></li>
          <li><a href="#P">P</a></li>
          <li><a href="#Q">Q</a></li>
          <li><a href="#R">R</a></li>
          <li><a href="#S">S</a></li>
          <li><a href="#T">T</a></li>
          <li><a href="#U">U</a></li>
          <li><a href="#V">V</a></li>
          <li><a href="#W">W</a></li>
          <li><a href="#X">X</a></li>
          <li><a href="#Y">Y</a></li>
          <li><a href="#Z">Z</a></li>
        </ul>

        <div className='A' id="A">
          <h2>A</h2>
            <h4>Ah Baling : </h4><p>A Teochew dessert. Glutinous rice balls with filling in clear sweet soup. The filling could be peanuts, red bean paste, green bean paste, yam or sesame paste. Also referred to as “tang yuan” in Mandarin.</p>
            <h4>Al dente : </h4><p>Describes food, particularly pasta, that are cooked so as to be still firm when bitten.</p>
            <h4>Ang Ku Kueh :  </h4><p>Literally means Red Tortoise Cake. A small Chinese pastry having a soft sticky glutinous rice flour skin with a sweet filling of bean or peanuts. It is molded to resemble a tortoise shell and is traditionally considered auspicious as it symbolises longevity and good fortune.</p>
            <h4>Apom : </h4><p>(also appom or appam)  Indian pancakes made from rice flour, with a soft, billowy bum in the centre and soft thin crispy edges. The plain version is usually eaten with sugar and desiccated coconut.</p>
            <h4>Arancini : </h4><p>Italian deep fried stuffed rice balls that are coated with breadcrumbs.</p>
        </div>

        <div className='A' id="B">
          <h2>B</h2>
            <h4>Bak Chor Mee :  </h4><p>A noodle dish served with minced meat or pork slices, with other ingredients such as pork liver, stewed sliced mushrooms and bits of deep-fried lard. An important component of the dish is the sauce which consists of chili, vinegar and other condiments such as soy sauce and pepper.</p>
            <h4>Bak Kut Teh :  </h4><p>Pork Ribs cooked in broth of a variety of Chinese herbs and spices. There are different versions including the Hokkien style, Teochew style and Klang style</p>
            <h4>Bak Chang : </h4><p>Steamed glutinous rice dumplings, usually filled with pork and mushrooms, and wrapped in bamboo leaves.</p>
            <h4>Bakwan Kepiting : </h4><p>A Straits Chinese pork and crab meatballs soup dish. Meat balls of minced pork mixed with crabmeat and crunchy bamboo shoots are boiled and served in a light soup (usually chicken & fish stock).</p>
        </div>


        <div className='A' id="C">
          <h2>C</h2>
            <h4>Chap Chye : </h4><p>A mixed vegetable stem comprising mainly cabbage stewed with timchok (sweet beancake) and bean curd skins.</p>
            <h4>Chapati :  </h4><p>An Indian unleavened flatbread made from wholewheat flour.</p>
            <h4>Char Kway Teow : </h4><p>Fried flat rice flour noodles. The dish is stir-fried with soy sauce and common ingredients include eggs, slices of Chinese sausage, cockles and fishcakes.</p>
            <h4>Char Siew : </h4><p>Roasted seasoned pork which is sweet and savory and sliced into thin pieces.  Char Siew is usually served with with steamed white rice or noodles.</p>
        </div>
      </div>


    </>
  );
}