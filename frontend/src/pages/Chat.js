import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Chat = () => {

    const [chats, setChats] = useState([])

    const host = "http://localhost:5000"

    const fetchChats = async () => {
        const { data } = await axios.get(`${host}/api/chats`)
        setChats(data)
    }

    useEffect(() => {
        fetchChats()
    }, [])

    console.log(chats)

    return (
        <div>
            {
                chats.map(chat =>
                    <div key={chat._id}>
                        {chat.chatName}
                    </div>
                )
            }
        </div>
    )
}

export default Chat