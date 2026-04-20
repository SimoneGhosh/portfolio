import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container flex min-h-screen items-center justify-center">
      <main>
        <div class="row profile">
          <div class="col w-40 left"> 

            <span class="font-extrabold" >
              <h1>Simone Ghosh</h1>
            </span>
            <div class="general-about">
              <img class="pfp-fallback" src="src/assets/portrait.jpg" alt="simone's profile picture" />
            </div>
            <div class="Mood">
              <p>
                <b>mood: </b>
                 Silly & Goofy
              </p>
            </div>

            <div class="contact">
              <div class="heading">
                <h4>Contact Simone</h4>
              </div>
              <div class="inner">

                <div class="f-row">
                  <div class="f-col">
                    <a href="mailto:s66ghosh@uwaterloo.ca">
                      <img src="https://static.spacehey.net/icons/add.png" class="icon" aria-hidden="true" loading="lazy" alt=""/> 
                        Email
                    </a>
                  </div>

                  <div class="f-col">
                    <a href="https://www.linkedin.com/in/simoneghosh/">
                      <img src="https://static.spacehey.net/icons/add.png" class="icon" aria-hidden="true" loading="lazy" alt=""/>                
                        Linkedin
                    </a>
                  </div>
                </div>

                <div class="f-row">
                  <div class="f-col">
                    <a href="https://github.com/SimoneGhosh">
                      <img src="https://static.spacehey.net/icons/add.png" class="icon" aria-hidden="true" loading="lazy" alt=""/> 
                        Github
                    </a>
                  </div>

                  <div class="f-col">
                    <a href="https://x.com/simonesyde">
                      <img src="https://static.spacehey.net/icons/add.png" class="icon" aria-hidden="true" loading="lazy" alt=""/>                
                        X
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="url-info">
              <p><b>Profile URL:</b></p>
              <p>https://portfolio.simoneghosh.com</p>
            </div>

            <div class="table-section">
              <div class="heading">
                <h4>Simone's Interests</h4>
              </div>
              <div class="inner">
                <table class="details-table" cellspacing="3" cellpadding="3">
                  <tbody>
                    <tr>
                      <td>
                        <p>General</p>
                      </td>
                      <td>
                          <p>My cute cat!</p>
                          <img src="src/assets/cat.jpg" alt="simone's cat picture" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Music</p>
                      </td>
                      <td>
                        <p>
                          Laufey, PinkPantheress, Olivia Dean, Beabadoobee
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Movies</p>
                      </td>
                      <td>
                          <p>The Hangover, The Hangover Part II, The Hangover Part III</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Television</p>
                      </td>
                      <td>
                        <p>
                          House MD
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Books</p>
                      </td>
                      <td>
                          <p>A Man Called Ove</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>        

          <div class="col right">

            <div class="blurbs">
              <div class="heading">
                <h4>Simone's Blurbs</h4>
              </div>
              <div class="inner">
                <div class="section">
                  <h4>About me:</h4>
                  <p itemprop="description">
                    <p>Hiii! I love eating, painting, reading and coding.</p>
                    <p>Systems Design Engineering @uWaterloo</p>
                  </p>

                  <h4>My life so far:</h4>
                  <ul>
                    <li><p>2026: UW Blueprint + WatAI - Dev for Social Good</p></li>
                    <li><p>2026: Web Dev @GenerisGP - Feedback Dashboard w/ NLP</p></li>
                    <li><p>2021: Coded for the first time! Made a HTML site about jellyfish</p></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="friends">
              <div class="heading">
                <h4>Simone's Project Space</h4>
              </div>
              <div class="inner">
                <p><b>I am currently working on a compiler in C++.</b></p>
                  <div class="friends-grid">
                    <div class="person">
                      <a href="https://github.com/SimoneGhosh/Programming-Language-Interpreter">
                        <p>Interpreter in Go</p>
                      </a>
                      <a href="https://github.com/SimoneGhosh/Programming-Language-Interpreter">
                        <img class="pfp-fallback" src="src\assets\monkey.png" alt="interpreter in go project screenshot" loading="lazy"/>
                      </a>
                    </div>
                    <div class="person">
                      <a href="https://github.com/SimoneGhosh/Little-Internet-Library">
                        <p>Little Internet Library</p>
                      </a>
                      <a href="https://github.com/SimoneGhosh/Little-Internet-Library">
                        <img class="pfp-fallback" src="src\assets\internetlibrary.png" alt="little internet library project screenshot" loading="lazy"/>
                      </a>
                    </div>
                    <div class="person">
                      <a href="https://github.com/JolieeZhuu/jeometry-dash">
                        <p>Platformer Game</p>
                      </a>
                      <a href="https://github.com/JolieeZhuu/jeometry-dash">
                        <img class="pfp-fallback" src="src\assets\platformgame.png" alt="platformer game project screenshot" loading="lazy"/>
                      </a>
                    </div>
                    <div class="person">
                      <a href="https://github.com/SimoneGhosh/my_portfolio">
                        <p>Interactive Room</p>
                      </a>
                      <a href="https://github.com/SimoneGhosh/my_portfolio">
                        <img class="pfp-fallback" src="src\assets\interactiveroom.png" alt="interactive room project screenshot" loading="lazy"/>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
