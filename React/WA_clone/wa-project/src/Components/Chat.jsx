import React from 'react';
// useParams
import { useParams } from 'react-router-dom'

function Chat() {
  const params = useParams();
  console.log(params);
  return (
    <h2>Chat : {params.uniqueId}</h2>
  )
}

export default Chat