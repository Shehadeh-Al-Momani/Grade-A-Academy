USE Grade_A;

CREATE Table roles (
  id int AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (id),
  type varchar(255)
);

CREATE Table users (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(255),
  credentials varchar(255),
  adress varchar(255),
  email varchar(255),
  password varchar(255),
  phone varchar(255),
  role_id int ,
  created_at timestamp,
  isDisabled  TINYINT DEFAULT 0,
  isLoggedIn TINYINT DEFAULT 0 ,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE Table categories (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(255), 
  PRIMARY KEY (id)
);

CREATE Table courses (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(255),
  price varchar(255),
  description varchar(255),
  instructor_id int,
  img_url varchar(255),
  created_at timestamp,
  category_id int,
  isDisabled TINYINT DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (instructor_id) REFERENCES users(id)
);

CREATE Table videos (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(255),
  vide_url varchar(255),
  course_id int,
  created_at timestamp,  
  PRIMARY KEY (id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE Table rating (
  id int AUTO_INCREMENT NOT NULL,
  student_id int,
  course_id int,
  rating_value int,
  PRIMARY KEY (id),
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE Table registration (
  id int AUTO_INCREMENT NOT NULL,
  student_id int,
  course_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE messeges (
  id int PRIMARY KEY AUTO_INCREMENT,
  stuID int,
  insID int,
  message varchar(255),
  sender tinyint,
  created_at timestamp,
  FOREIGN KEY (stuID) REFERENCES users(id),
  FOREIGN KEY (insID) REFERENCES users(id)
);

1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12,
13,
14,
15,
INSERT INTO roles (id,type)values(1,'admin'),(2,'instructor'),(3,'student');
INSERT INTO users (id,name,credentials,adress,email,password,phone,role_id,created_at) values
( 1,'admin',null,'Bridgeport','admin@gmail.com','admin1234','504-621-8927',1,now())
,( 2,'instructor one','10 years experience CE','Anchorage','instructor1@gmail.com','instructorone1234','504-621-8937',2,now())
,( 3,'instructor two','Doctor of CS','Hamilton','instructor2@gmail.com','sad4as76d454','504-621-8947',2,now())
,( 4,'instructor three','Doctor of CIS','Ashland','instructor3@gmail.com','sad4as56d456','504-621-8957',2,now())
,( 5,'student one',null,'Chicago','student1@gmail.com','sad4as56d457','504-621-8967',3,now())
,( 6,'student two',null,'Baltimore','student2@gmail.com','sad4as56d458','810-292-9388',3,now())
,( 7,'student three',null,'Kulpsville','student3@gmail.com','sad4as56d460','856-636-8749',3,now())
,( 8,'student four',null,'Sioux Falls','student4@gmail.com','sad4as56d461','907-385-4412',3,now())
,( 9,'student five',null,'Los Angeles','student5@gmail.com','sad4as56d462','513-570-1893',3,now())
,( 10,'student six',null,'Chagrin Falls','student6@gmail.com','sad4as56d464','419-503-2484',3,now());
INSERT INTO categories (id,name) values(1,'Web design'),(2,'Web development'),(3,'Networks'),(4,'IT support'),(5,'Android development'),(6,'ios development');
INSERT INTO courses (id,name,price,description,instructor_id,created_at,category_id) values
( 1,'React.js',9.99,'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',2,now(),1),
( 2,'Angular.js',9.99,'Master Angular 10 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',2,now(),1),
( 3,'Node.js',9.99,'Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!',3,now(),2),
( 4,'PHP',9.99,'PHP for Beginners:learn everything you need to become a professional PHP developer with practical exercises & projects',3,now(),2),
( 5,'CCNA',9.99,'Learn about networking and start your journey to Cisco 200-301 Certification',4,now(),3),
( 6,'CCIE',9.99,'The top rated CCNA course online and only one where all questions get a response. Full lab exercises included',4,now(),3),
( 7,'CompTIA A+ ',9.99,'Course 1: Everything you need to pass the A+ Certification Core 1 (220-1001) Exam, from Mike Meyers and Total Seminars',2,now(),4),
( 8,'AWS Serverless',9.99,'Get into serverless computing with API Gateway, AWS Lambda and other Amazon Web Services! Zero server config APIs & SPAs',2,now(),4),
( 9,'The Complete Android N Developer Course',9.99,'Learn Android App Development with Android 7 Nougat by building real apps including Uber, Whatsapp and Instagram!',3,now(),5),
( 10,'Android Java Masterclass - Become an App Developer',9.99,'Improve your career options by learning Android app Development. Master Android Studio and build your first app today',3,now(),5),
( 11,'Swift 5',9.99,'From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!',4,now(),6),
( 12,'Flutter',9.99,'Officially created in collaboration with the Google Flutter team.',4,now(),6);

INSERT INTO rating (id,student_id,course_id,rating_value) values(1,5,1,4),(2,5,2,4.5),(3,5,3,4),(4,6,4,4.5),(5,6,5,4),(6,6,6,4.5),(7,7,7,4),(8,7,8,4.5),(9,7,9,4),(10,8,10,4.5),(11,8,11,4),(12,8,1,4.5),(13,9,2,4),(14,9,3,4),(15,9,4,4);
INSERT INTO registration (id,student_id,course_id) values(1,5,1),(2,5,2),(3,5,11),(4,6,3),(5,6,4),(6,6,12),(7,7,5),(8,7,10),(9,8,6),(10,8,7),(11,9,8),(12,9,9); 

