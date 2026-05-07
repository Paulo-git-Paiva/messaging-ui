import type { Conversation } from "@/types/chat";

export const mockConversations: Conversation[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    avatar: "https://i.pravatar.cc/150?img=1",
    unread: 7,
    online: true,

    messages: [
      {
        id: 1,
        text: "Olá Carlos, tudo bem com você?",
        sender: "me",
        createdAt: "13:45",
      },

      {
        id: 2,
        text: "Bom dia Roberto, por aqui tudo certo! E com você?",
        sender: "other",
        createdAt: "13:56",
      },
    ],
  },

  {
    id: 2,
    name: "Luiz Ferreira",
    avatar: "https://i.pravatar.cc/150?img=12",
    unread: 7,
    online: false,

    messages: [
      {
        id: 1,
        text: "Concordo com a proposta enviada.",
        sender: "other",
        createdAt: "14:50",
      },
    ],
  },

  {
    id: 3,
    name: "Maria Silva",
    avatar: "https://i.pravatar.cc/150?img=5",
    unread: 5,
    online: true,

    messages: [
      {
        id: 1,
        text: "Claro! Estou disponível para reunião.",
        sender: "other",
        createdAt: "13:10",
      },
    ],
  },

  {
    id: 4,
    name: "Ana Costa",
    avatar: "https://i.pravatar.cc/150?img=9",
    unread: 9,
    online: true,

    messages: [
      {
        id: 1,
        text: "A reunião foi muito produtiva hoje.",
        sender: "other",
        createdAt: "15:20",
      },
    ],
  },

  {
    id: 5,
    name: "João Pereira",
    avatar: "https://i.pravatar.cc/150?img=15",
    unread: 0,
    online: false,

    messages: [
      {
        id: 1,
        text: "Podemos rever o cronograma novamente.",
        sender: "other",
        createdAt: "16:05",
      },
    ],
  },

  {
    id: 6,
    name: "Fernanda Alves",
    avatar: "https://i.pravatar.cc/150?img=20",
    unread: 0,
    online: false,

    messages: [
      {
        id: 1,
        text: "Estou ansiosa para os resultados.",
        sender: "other",
        createdAt: "16:45",
      },
    ],
  },

  {
    id: 7,
    name: "Gabriela Lima",
    avatar: "https://i.pravatar.cc/150?img=30",
    unread: 0,
    online: false,

    messages: [
      {
        id: 1,
        text: "Precisamos atualizar os dados ainda hoje.",
        sender: "other",
        createdAt: "23/08/2025",
      },
    ],
  },

  {
    id: 8,
    name: "Beatriz Souza",
    avatar: "https://i.pravatar.cc/150?img=40",
    unread: 0,
    online: false,

    messages: [
      {
        id: 1,
        text: "Claro! É o juridico@empresa.com",
        sender: "me",
        createdAt: "24/08/2025",
      },
    ],
  },

  {
    id: 9,
    name: "Caitano Marechal",
    avatar: "https://i.pravatar.cc/150?img=60",
    unread: 0,
    online: false,

    messages: [
      {
        id: 1,
        text: "Recebi o documento corretamente.",
        sender: "other",
        createdAt: "25/08/2025",
      },
    ],
  },

  {
    id: 10,
    name: "Mauro Gomes",
    avatar: "https://i.pravatar.cc/150?img=50",
    unread: 0,
    online: false,

    messages: [
      {
        id: 1,
        text: "Vou validar isso com o financeiro.",
        sender: "other",
        createdAt: "26/08/2025",
      },
    ],
  },
];
