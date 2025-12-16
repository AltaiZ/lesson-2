import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { link } from "fs";
import { BellRing, Mail, Heart, Settings, Star, Car } from "lucide-react";
import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AvatarImage } from "@radix-ui/react-avatar";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 p-10">
      <h1 className="flex justify-center font-bold text-4xl">shadcn/ui Component Showcase</h1>
      <p  className="flex justify-center">A collection of beautifully designed components built with Radix UI and Tailwind CSS</p>
       <div className="flex flex-col gap-8 max-w-[1200px] mx-auto">
        <Card className="p-10">
          <p>Buttons</p>
          <p>Different button variants and sizes</p>
          <div className="flex gap-5 flex-wrap">
            <Button>Default</Button>
            <Button variant={"secondary"}>Secondary</Button>
            <Button variant={"destructive"}>Default</Button>
            <Button variant={"outline"}>Default</Button>
            <Button variant={"ghost"}>Ghost</Button>
            <Button variant={"link"}>Link</Button>
            <Button size={"sm"}>Small</Button>
            <Button size={"lg"}>Large</Button>
            <Button disabled={true}>Disabled</Button>
            <Button>
              <Mail />
              With Icon
            </Button>
          </div>
        </Card>
        <Card className="p-10">
          <Dialog>
           <p>Dialog</p>
           <p>Modal dialogs for user interactions</p>
            <DialogTrigger className="border w-fit p-2 rounded-xl ">Open Dialog</DialogTrigger>
            <DialogContent>
               {" "}
            <DialogTitle>Edit Profile</DialogTitle>{" "}
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
            <p>Name</p>
            <Input type="Name" placeholder="John Doe"></Input>
            <p>Email</p>
            <Input type="Email" placeholder="john@example.com"></Input>
            <Button>Save changes</Button>
            </DialogContent>
          </Dialog>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card className="p-10">
            <div className="flex justify-between">
              <h1>User Profile</h1>
              <Badge>Pro</Badge>
            </div>
            <p>Manage your account settings</p>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl">
                <img
                  data-slot="avatar-image"
                  className="aspect-square size-full"
                  src="https://github.com/shadcn.png"
                ></img>
              </div>
              <div>
                <p>John Doe</p>
                <p>john@example.com</p>
              </div>
            </div>
            <Button>
              {" "}
              <User /> View Profile{" "}
            </Button>
          </Card>
          <Card className="p-10">
            <div className="flex justify-between">
              <h1>Notifications</h1>
              <Badge variant={"destructive"}> 3 New</Badge>
            </div>
            <p>You have unread notifications</p>
            <div>
              <p className="flex border-b-1">
                <BellRing /> New message unread notifications
              </p>
            </div>
            <div>
              <p className="flex">
                <Heart /> New message unread notifications
              </p>
            </div>
            <Button variant={"outline"}>View All</Button>
          </Card>
          <Card className="p-10">
            <div className="flex justify-between">
              <p>Settings</p>
              <Badge variant={"secondary"}>Updated</Badge>
            </div>
            <p>Configure your preferences</p>
            <p>Username</p>
            <Input type="username" placeholder="Enter username"></Input>
            <p>Password</p>
            <Input type="username" placeholder="********"></Input>
            <Button>
              <Settings /> Save Settings
            </Button>
          </Card>
        </div>
        <Card className="p-10">
          <p>Badges</p>
          <p>Status indicators and labels</p>
          <div className=" flex gap-5">
            <Badge variant={'default'}>Default</Badge>
            <Badge variant={'secondary'}>Secondary</Badge>
            <Badge variant={'destructive'}>Destructive</Badge>
            <Badge variant={'outline'}>Outline</Badge>
            <Badge className="bg-green-400"><Star/>Featured</Badge>
            <Badge className="bg-blue-400">New</Badge>
            <Badge className="bg-purple-400">Premium</Badge>
          </div>
        </Card>
        <Card className="p-10">
          <p>Avatars</p>
          <p>User profile pictures and fallbacks</p>
          <div className="flex gap-5">
            <Avatar><AvatarImage src="https://github.com/shadcn.png"></AvatarImage></Avatar>
            <Avatar><AvatarImage src='https://github.com/vercel.png'></AvatarImage></Avatar>
            <Avatar className="border rounded-2xl flex justify-center items-center"><p>JD</p></Avatar>
            <Avatar className="border rounded-2xl flex justify-center items-center"><p>AB</p></Avatar>
            <Avatar className="size-20 animate-pulse"><AvatarImage src="https://github.com/shadcn.png"></AvatarImage></Avatar>
          </div>        
        </Card>
        <Card className="p-10">
          <p>Contact Form</p>
          <p>Example form using Input and Label components</p>
          <div className="flex gap-2">
            <div className="w-full">
              <p>First Name</p>
              <Input type="name" placeholder="John"></Input>
            </div>
            <div  className="w-full">
              <p>Last Name</p>
              <Input type="name" placeholder="Doe"></Input>
            </div>
          </div>
          <p>Email</p>
          <Input type="mail" placeholder="john.doe@example.com"></Input>
          <p>Message</p>
          <Input type="message" placeholder="Your message here..."></Input>
          <div className="flex justify-between">
            <Button variant={'outline'}>Cancel</Button>
            <Button variant={'default'}>Submit</Button>
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
