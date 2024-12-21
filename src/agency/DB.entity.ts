
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class USER_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100})
  name: string;

  @Column({ length: 100, unique : true })
  email: string;

  @Column()
  phone_no: string;

  @Column()
  address: string;

  @Column()
  dob: Date;

  @Column()
  gender: string;

  @Column()
  nid_no: string;

  @Column()
  nid_pic_path: string;

  @Column()
  profile_pic_path: string;

  @Column()
  description:string;

  @Column()
  user_type: string;

  @Column()
  status: string;
}


@Entity()
export class LOGIN_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique : true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refreshToken: string;

  @Column()
  user_id: number;
}

@Entity()
export class AGENCY_INFO{
  @PrimaryGeneratedColumn()
  id:number;

  @Column({ length: 100})
  name: string;

  @Column({ length: 100, unique : true })
  email: string;

  @Column()
  phone_no: string;

  @Column()
  address: string;

  @Column()
  company_size:number;

  @Column()
  description:string;

  @Column()
  status: string;
}

@Entity()
export class BOOKING_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=> USER_INFO)
  @JoinColumn({'name': 'user_id'})
  user_id: number;

  @ManyToOne(()=> PACKAGE_INFO)
  @JoinColumn({'name': 'package_id'})
  package_id: number;

  @ManyToOne(()=> TRANSPORT_INFO)
  @JoinColumn({'name': 'transport_id'})
  transport_id: number;

  @Column()
  booking_data: Date;

  @Column()
  status:string
}

@Entity()
export class PACKAGE_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100})
  name: string;

  @Column()
  description: string;

  @Column()
  price:number;

  @ManyToOne(()=> AGENCY_INFO)
  @JoinColumn({'name': 'agency_id'})
  agency_id: number;
}

@Entity()
export class TRANSPORT_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  price_per_seat: number;

  @Column()
  capacity: number;
}

@Entity()
export class PAYMENT_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(()=> BOOKING_INFO)
  @JoinColumn({'name': 'booking_id'})
  booking_id: number;

  @Column()
  payment_method: string;

  @Column()
  amount: number;

  @Column()
  status: string;

  @Column()
  transaction_no: string;
}

@Entity()
export class DESTINATION_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  best_season: string;

  @Column()
  popularity_score: number;
}

@Entity()
export class REVIEW_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=> USER_INFO)
  @JoinColumn({'name': 'user_id'})
  user_id: number;

  @ManyToOne(()=> USER_INFO)
  @JoinColumn({'name': 'target_id'})
  target_id: number;

  @ManyToOne(()=> USER_INFO)
  @JoinColumn({'name': 'target_type'})
  target_type: string;

  @Column()
  review_text: number;

  @Column()
  rating: number;
}

@Entity()
export class BLOG_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title :string;

  @Column()
  content :string;

  @Column()
  author_id :number;

  @Column()
  comment_count : number;

  @Column()
  created_at :Date;

  @Column()
  react_count :number;

  @Column("int",{ array: true, nullable: true })
  react_id :number[];

  @Column("int", { array: true, nullable: true })
  commentor_id : number[];
}

@Entity()
export class COMMENT_INFO{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commentor_id :number;

  @Column()
  content :string;

  @Column()
  comment_description :string;

  @Column()
  comment_time :Date;

  @Column()
  blog_id :number;

}



