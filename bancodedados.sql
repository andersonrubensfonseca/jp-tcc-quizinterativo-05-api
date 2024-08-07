-- Criação de Tabela para Usuários
create table Usuarios (
ID int primary key,
Nome varchar (100) not null,
Email varchar (100) not null,
Senha varchar (255) not null,
Ativo boolean default true
); 

-- Criação de Tabela para Perguntas
create table Perguntas (
ID int primary key,
Perguntas Text,
Ativo boolean default true
);

-- Criação de Tabela para Respostas
create table Respostas (
ID int primary key,
Respostas text,
PerguntasID int not null,
Correto boolean default false,
Ativo boolean default true,
foreign key (PerguntasID) references Perguntas(ID) 
);

-- Criação de Tabela Quiz
create table Quiz (
ID int primary key,
Nome text,
Ativo boolean default true 
);

-- Criação de Tabela Quiz/Pergunta
create table Quiz_Pergunta (
ID int primary key,
PerguntasID int not null,
QuizID int not null,
Ativo boolean not null,
foreign key (PerguntasID) references Perguntas(ID),
foreign key (QuizID) references Quiz(ID)
); 

-- Criação de Tabela Usuarios/Repostas
create table Usuario_Respostas (
ID int primary key,
UsuariosID int not null,
QuizID int not null,
PerguntasID int not null,
RespostasID int not null,
Ativo boolean default true,
foreign key (UsuariosID) references Usuarios(ID),
foreign key (QuizID) references Quiz(ID),
foreign key (PerguntasID) references Perguntas(ID),
foreign key (RespostasID) references Respostas(ID)
);