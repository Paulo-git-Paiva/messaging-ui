export interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  createdAt: string;
}

export interface Conversation {
  id: number;
  name: string;
  avatar: string;
  unread: number;
  online: boolean;
  messages: Message[];
}
