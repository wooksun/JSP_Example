CREATE TABLE "CATEGORY"( 
      "IDX" NUMBER(*,0) NOT NULL ENABLE, 
   "CATEGORY" VARCHAR2(100 BYTE) NOT NULL ENABLE, 
   "GUP" NUMBER(*,0), 
   "LEV" NUMBER(*,0), 
   "SEQ" NUMBER(*,0), 
    CONSTRAINT "CATEGORY_PK" PRIMARY KEY ("IDX")
 );    
 
 -- 시퀀스 작업
 delete from category;
 drop sequence category_idx_seq;
 create sequence category_idx_seq;
 
 