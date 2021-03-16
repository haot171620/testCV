import React from 'react';

import './App.css';
import { Box, Divider, Grid, Typography } from '@material-ui/core';

import avatar from './img/haodeptrai.jpg';

function App() {
  return (
    <>
    <Box   bgcolor='white' spacing={2}  >
      <Grid container >
      <Grid item xs={2} bgcolor='blue'></Grid>
      <Grid item xs={8}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Grid item>
              <h1 style={{fontSize:'60px', color:'red'}}>Tran Quoc Nhat Hao</h1>
            </Grid>
          </Grid>
      <Grid item xs={4}>
        <Grid container> 
          <Grid item style={{color:'red'}} >
            <ul>
              <li>Phone</li>
              <li>Facebook</li>
              <li>Gmail:</li>
            </ul>
          </Grid>
        </Grid> 
      </Grid>
      
      </Grid>
      <Box my={1}>
        <Divider/>
      </Box>

      <Grid container >
        <Grid item xs={2} >
          <Grid container spacing={1} justify="space-between">
          <Grid item>
          <img src={avatar} alt="123" width="100px" height="100px" />
        </Grid>
          </Grid>
        
        </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item>
              <p>Tui la hao</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      <Box my={1}>
        <Divider/>
      </Box>
        <Grid container spacing={5} >
        
          <Grid item xs={8}>
          
            <Grid container spacing={1}>
              <Grid item>
              <Divider orientation="vertical" style={{width: '10px', backgroundColor: 'green'}} />
              </Grid>
              <Grid item>
                <Typography style={{color: 'green'}}><b>EXPERIENCE</b></Typography>
              </Grid>
              </Grid>
             
            <Grid container  >
              <Grid item xs={12}>
               <Grid container justify="space-between" alignItems="center">
               <Grid item>
                <b>Intern Javascript</b>
                </Grid>
                <Grid item > 
                  <p style={{color:'gray',fontSize:'13px'}}>GoCode 2019</p>
                </Grid>
               </Grid>
              <Grid item>
                  <p style={{fontSize:'14px'}}>Intern JavaScript at GoCode, knew some basic definition about JavaScript and TypeScript.</p>
              </Grid>
              <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <b>Laravel</b>
              </Grid>
              <Grid item>
                <p style={{color:'gray',fontSize:'13px'}}>Study Project | 2019</p>
                </Grid>
              </Grid>
              <Grid item>
                <p>Building the website selling electronics by Laravel.</p>
              </Grid>
              <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <b>HTML, CSS</b>
              </Grid>
              <Grid item>
                <p style={{color:'gray',fontSize:'13px'}}>Study Project | 2019</p>
                </Grid>
              </Grid>
              <Grid item>
                <p>Know the basics of definition about HTML and CSS.</p>
              </Grid>
              
              </Grid>
              <Grid container spacing={1}>
              <Grid item>
              <Divider orientation="vertical" style={{width: '10px', backgroundColor: 'green'}} />
              </Grid>
              <Grid item>
                <Typography style={{color: 'green'}}><b>PROJECT</b></Typography>
              </Grid>
              </Grid>
              <Grid container  >
                <Grid item xs={12}>
                  <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <b>Gemingear</b>
                  </Grid>
                  <Grid item ><p style={{color:'gray',fontSize:'13px'}}>2019</p>
                  </Grid>
                  </Grid>
                  <Grid item>
                    <p>This is study project Web application development coded by <b>PHP Laravel Framework</b>. Website selling electronics includes: laptop, screen, keyboard,... Website is built based on MVC model and integrated some APIs.</p>
                  </Grid>
                  <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <b>Bad Store</b>
                  </Grid>
                  <Grid item ><p style={{color:'gray',fontSize:'13px'}}>2019</p></Grid>
                  </Grid>
                  <Grid item>
                    <p>This is study project E-commerce coded by <b>PHP Wordpress</b>. Website selling accessories includes: shoes, bags, watches,... for the women.</p>
                  </Grid>
                  <Grid container justify="space-between" alignItems="center">
                      <Grid item>
                        <b>eShop</b>
                      </Grid>
                      <Grid item>
                        <Grid item><p style={{color:'gray' ,fontSize:'13px'}}>2019</p></Grid>
                      </Grid>
                  </Grid>
                  <Grid item>
                    <p>This is project to be done during intern time at GoCode coded by ReactJS. Website was built UI by Redux following the SSR model.</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            
          </Grid>
         
          <Grid item xs={4}>
          <Grid container spacing={1}>
              <Grid item xs={12}>
              <Grid container spacing={1}>
              <Grid item>
              <Divider orientation="vertical" style={{width: '10px', backgroundColor: 'green'}} />
              </Grid>
              <Grid item>
                <Typography style={{color: 'green'}}><b>SKILLS</b></Typography>
              </Grid>
              </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item>
                    <b>Front end</b>
                  </Grid>
                </Grid>
                <Grid item >
                  <p>HTML/CSS/JS</p>
                </Grid>
                <Grid item>
                  <p>React/Redux/Hooks</p>
                </Grid>
                <Grid item>
                  <p>Angular</p>
                </Grid>
                <Grid item>
                <p>Material-UI</p>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item>
                    <b>Back end</b>
                  </Grid>
                </Grid>
                <Grid item>
                    <p>Laravel</p>
                  </Grid>
                  <Grid item>
                    <p>Wordpress</p>
                  </Grid>
                  <Grid item>
                    <p>Node.js (Express, Nestjs)</p>
                  </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item>
                  <b>Database</b>
                  </Grid>
                </Grid>
                <Grid item>
                <p>SQL Server</p>
                </Grid>
                <Grid item>
                <p>My SQL</p>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid container>
                  <Grid item>
                  <b>Others</b>
                  </Grid>
                </Grid>
                <Grid item>
                <p>AI</p>
                </Grid>
                <Grid item>
                <p>Photoshop</p>
                </Grid>
                </Grid>
             
              <Grid container spacing={1}>
                <Grid item>
                  <Divider orientation="vertical" style={{width:'10px',backgroundColor:'green'}}/>
                </Grid>
                <Grid item>
                  <Typography style={{color:'green'}}><b>EDUCATION</b></Typography>
                </Grid>
              </Grid>
              
              
                <Grid container spacing={1} alignItem="center" >
                <Grid item xs={12}>
                <b>THPT Phan Chu Trinh</b>
              </Grid>
              <Grid item xs={12}>
                <p>Highschool Song Cau, Phu Yen 2014 - 2017</p>
              </Grid>
              </Grid>
               
                <Grid container >
                <Grid item xs={12}>
                <b>VLU</b>
              </Grid>
              <Grid item xs={12}>
              <p>VN University HCMC</p>
              </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item>
                  <Divider orientation="vertical" style={{width:'10px',backgroundColor:'green'}}/>
                  </Grid>
                  <Grid item>
                    <Typography style={{width:'10px',color:'green'}}><b>LANGUAGE</b></Typography>
                  </Grid>
                </Grid>
                
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    Vienamese (Native)
                  </Grid>
                  <Grid item xs={12}>
                    English (Basic)
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Divider orientation="vertical" style={{width:'10px',backgroundColor:'green'}}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography style={{width:'10px',color:'green'}}><b>INTERSETING</b></Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                  <p>Soccer</p>
                  </Grid>
                  <Grid item xs={12}>
                    <p>Reading book</p>
                  </Grid>
                  <Grid item xs={12}>
                    <p>Listening to music</p>
                  </Grid>
                 
                </Grid>
                
                
                
             </Grid> 
             
          </Grid>
          
         </Grid>
         
          
      </Grid>
      <Grid item xs={2} bgcolor='red'></Grid>
      </Grid>
      </Box>
    </>
  );
}

export default App;
