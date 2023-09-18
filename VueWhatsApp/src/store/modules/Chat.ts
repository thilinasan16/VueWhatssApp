import { collection, addDoc, doc, setDoc, getDocs } from 'firebase/firestore'
import { firebaseDB } from '@/firebase'
const Chat = {
  state: {
    chatUsers: [],
    chatMessages: [],
    currentChat: null,
    ChatId: null
  },
  mutations: {
    SET_CHAT_USERS(state: { chatUsers: [] }, payload: []) {
      state.chatUsers = payload
    },

    SET_CURRENT_CHAT(state: { currentChat: any }, payload: any) {
      state.currentChat = payload
    },

    SET_CHAT_MESSAGES(
      state: { chatMessages: []; conversationId: string },
      payload: { messages: []; conversationId: string }
    ) {
      state.chatMessages = []
      state.chatMessages = payload.messages
      state.conversationId = payload.conversationId
    },

    UPDATE_CHAT_MESSAGES(state: { chatMessages: any }, payload: any) {
      state.chatMessages = []
      state.chatMessages = payload
    }
  },
  actions: {
    async SET_CHAT_USERS(context: any) {
      const db = firebaseDB
      const querySnapshot = await getDocs(collection(db, 'users'))
      const allUsers = []
      querySnapshot.forEach((doc) => {
        allUsers.push(doc.data())
      })
      context.commit('SET_CHAT_USERS', allUsers)
    },

    SET_CURRENT_CHAT(context: any, payload: any) {
      context.commit('SET_CURRENT_CHAT', payload)
    },

    SET_CHAT_MESSAGES(context: any, payload: string) {},

    async UPDATE_CHAT_MESSAGES(context: any, payload: { chat: any; id: string }) {
      const db = firebaseDB

      const chatRef = await doc(db, 'chats', payload.id)

      const messagesCollectionRef = collection(chatRef, 'messages')

      await addDoc(messagesCollectionRef, payload.chat)

      context.commit('UPDATE_CHAT_MESSAGES', payload.chat)
    }
  }
}

export default Chat
