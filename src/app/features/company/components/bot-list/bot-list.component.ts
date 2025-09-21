import { Component } from "@angular/core";
import {NgForOf} from "@angular/common";


interface BotCard {
  id: string;
  name: string;
  description: string;
  labels: { text: string; color: string }[];
  progress: number;
  public: boolean;
  pro?: boolean;
  model: string;
  actions: { icon: string; text: string; color?: string }[];
}

@Component({
  selector: "app-bot-list",
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: "./bot-list.component.html",
  styleUrl: "./bot-list.component.scss",
})
export class BotListComponent {
  bots: BotCard[] = [
    {
      id: "bot-1",
      name: "Website Assistant",
      description: "Customer support bot trained on website documentation.",
      labels: [
        { text: "GPT-3.5", color: "#3b82f6" },
        { text: "Public", color: "#22c55e" },
      ],
      model: "GPT-3.5",
      progress: 100,
      public: true,
      actions: [
        { icon: "▶️", text: "Chat" },
        { icon: "💻", text: "Embed" },
        { icon: "✏️", text: "Edit" },
      ],
    },
    // {
    //   id: "bot-2",
    //   name: "Product Expert",
    //   description: "Advanced product knowledge base for internal teams.",
    //   labels: [
    //     { text: "GPT-4", color: "#a21caf" },
    //     { text: "Private", color: "#6b7280" },
    //   ],
    //   model: "GPT-4",
    //   progress: 75,
    //   public: false,
    //   actions: [
    //     { icon: "🧠", text: "Train", color: "#0ea5e9" },
    //     { icon: "▶️", text: "Chat" },
    //     { icon: "✏️", text: "Edit" },
    //   ],
    // },
    // {
    //   id: "bot-3",
    //   name: "Sales Assistant",
    //   description: "Bot that helps qualify leads and answer sales questions.",
    //   labels: [
    //     { text: "GPT-3.5", color: "#3b82f6" },
    //     { text: "Public", color: "#22c55e" },
    //     { text: "Pro", color: "#fbbf24" },
    //   ],
    //   model: "GPT-3.5",
    //   progress: 30,
    //   public: true,
    //   pro: true,
    //   actions: [
    //     { icon: "🧠", text: "Train", color: "#0ea5e9" },
    //     { icon: "▶️", text: "Chat" },
    //     { icon: "✏️", text: "Edit" },
    //   ],
    // },
    // {
    //   id: "bot-4",
    //   name: "HR Assistant",
    //   description: "Employee handbook and policy assistant for new hires.",
    //   labels: [
    //     { text: "GPT-3.5", color: "#3b82f6" },
    //     { text: "Private", color: "#6b7280" },
    //   ],
    //   model: "GPT-3.5",
    //   progress: 90,
    //   public: false,
    //   actions: [
    //     { icon: "🧠", text: "Train", color: "#0ea5e9" },
    //     { icon: "▶️", text: "Chat" },
    //     { icon: "✏️", text: "Edit" },
    //   ],
    // },
    // {
    //   id: "bot-5",
    //   name: "Support Agent",
    //   description: "Technical support chatbot for product troubleshooting.",
    //   labels: [
    //     { text: "GPT-4", color: "#a21caf" },
    //     { text: "Public", color: "#22c55e" },
    //     { text: "Pro", color: "#fbbf24" },
    //   ],
    //   model: "GPT-4",
    //   progress: 60,
    //   public: true,
    //   pro: true,
    //   actions: [
    //     { icon: "🧠", text: "Train", color: "#0ea5e9" },
    //     { icon: "▶️", text: "Chat" },
    //     { icon: "✏️", text: "Edit" },
    //   ],
    // },
  ];

  recentBots = [
    { name: "Website Assistant", iconColor: "#3b82f6" },
    { name: "Product Expert", iconColor: "#a21caf" },
  ];

}
