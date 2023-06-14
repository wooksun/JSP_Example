CREATE TABLE "WOOK"."GUESTBOOK"(
    "IDX" NUMBER(*,0) NOT NULL ENABLE, 
	"NAME" CHAR(20 BYTE) NOT NULL ENABLE, 
	"PASSWORD" CHAR(20 BYTE) NOT NULL ENABLE, 
	"MEMO" VARCHAR2(3000 BYTE) NOT NULL ENABLE, 
	"WRITEDATE" TIMESTAMP (6) DEFAULT sysdate, 
	"IP" CHAR(15 BYTE), 
	 CONSTRAINT "GEUSTBOOK_PK" PRIMARY KEY ("IDX")
     );
     
--  시퀀스 초기화 방법
--  모든 데이터를 제거하고 시퀀스를 다시 만든다.
delete from guestbook;
drop SEQUENCE guestbook_idx_seq;
-- 자동으로 1씩 증가하는 시퀀스 만들기 (mysql에서 auto) --
create SEQUENCE guestbook_idx_seq;

--  시퀀스이름.nextval : 시퀀스 값을 1 증가시킨다.
insert into guestbook(idx, name, password, memo, ip) values (guestbook_idx_seq.nextval, '최진욱', '1111', '1등입니다.', '192.168.100.101');
insert into guestbook(idx, name, password, memo, ip) values (guestbook_idx_seq.nextval, '홍길동', '2222', '2등입니다.', '192.168.100.102');
insert into guestbook(idx, name, password, memo, ip) values (guestbook_idx_seq.nextval, '임꺽정', '3333', '3등입니다.', '192.168.100.103');
insert into guestbook(idx, name, password, memo, ip) values (guestbook_idx_seq.nextval, '장길산', '4444', '4등입니다.', '192.168.100.104');

select * from guestbook;
select * from guestbook order by idx desc;
select count(*) from guestbook;
select count(*) from guestbook WHERE memo like '%1등%';
select count(*) from guestbook WHERE name like '%욱%';
select count(*) from guestbook WHERE memo like '%욱%' OR name like '%욱%';

--  트랜잭션은 한번에 모두 실행되어야 할 명령의 집합을 말한다.
--  commit: 트랜잭션이 모두 정상적으로 처리되서 결과를 데이터베이스에 반영한다.
--  rollback: 트랜잭션이 모두 정상적으로 처리되지 않았을 경우 최초 실행상태 이전으로 되돌린다.
--  오라클 디벨로퍼는 auto commit이 지원되지 않기 때문에 디벨로퍼에서 실행한 작업이 jsp에 적용되게 하려면 반드시 commit 명령을 실행해야 한다.
commit;

select * from (
    --  rnum은 rownum의 별명 / rownum에는 index 번호가 들어감 (실행결과 맨 왼쪽 번호)
    select rownum rnum, TT.* from (
        select * from guestbook order by idx DESC
    ) TT where rownum <= 20
    --  where rownum <= 20 은 index번호가 20이하 인 것 ->endNo
) where rnum >= 11;
-- where rnum >= 11 -> startNo

select * from guestbook where idx = 10;

delete from guestbook where idx = 280;

update guestbook set name = '욱진최', memo='수정되었습니다.' WHERE idx = 296;










