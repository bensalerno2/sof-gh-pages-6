import React, { useState } from 'react';
import './App.css';
import { Box, Button, FormControl } from '@chakra-ui/react';

function App() {
  const [message, setMessage] = useState<String>('');

  const dicty: {[key: number]: string} = {
    0: "I love you", 
    1: "You're my favorite",
    2: "Where would I be without you",
    3: "Your love feels like a warm sunny day",
    4: "You're my bestie",
    5: "I'll always be here for you",
    6: "You look prettier every time I see you.",
    7: "You look nice today",
    8: "I'm proud of your progress", 
    9: "I love your tattoo",
    10: "I love your eyes",
    11: "I love your smile", 
    12: "You taste good ;)",
    13: "I can't wait to see you",
    14: "I love how resilient you are",
    15: "I'm proud of who you're becoming", 
    16: "I like me better when I'm with you", 
    17: "Big hug!",
    18: "Big kiss!",
    19: "u stink",
    20: "I love love love you",
    21: "Remember to be nice to yourself."
}

  const myStyle={
    backgroundImage: "url('./background.png')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center', 
    height: '100vh', 
}

  function Random() {
    var maxNumber = 21;
    var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    return randomNumber
  }

  function getCompliment() {
    const numma = Random();
    const compliment = dicty[numma]
    setMessage(compliment)
  }



  return (
    <div style={myStyle}>
        <Box style={buttonStyle}>
            <div style={{backgroundColor: 'rgba(252, 246, 249, 0.45)', marginTop: '100px', paddingRight: '15px', paddingLeft: '15px', borderRadius: '15px', textAlign: "center"}}>
                <h3>Click below for a surprise</h3>
                <Button onClick={getCompliment}>?????</Button>
                <br/>
                <FormControl>
                    <h3>{message}</h3>
                </FormControl>
            </div>
        </Box>
    </div>
  );
}

export default App;
function randomNumber() {
  throw new Error('Function not implemented.');
}

