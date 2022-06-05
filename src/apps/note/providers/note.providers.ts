import { Connection } from "typeorm";
import { Note } from "../entities/note.entity";
import { Star } from "../entities/star.entity";
import { Comment } from "../entities/comment.entity";
// import { User } from '../entities/user.entity'

export const noteProviders = [
  {
    provide: "DATABASE_CONNECTION_NoteRepository",
    useFactory: (connection: Connection) => connection.getRepository(Note),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "DATABASE_CONNECTION_StarRepository",
    useFactory: (connection: Connection) => connection.getRepository(Star),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "DATABASE_CONNECTION_CommentRepository",
    useFactory: (connection: Connection) => connection.getRepository(Comment),
    inject: ["DATABASE_CONNECTION"],
  },
];
