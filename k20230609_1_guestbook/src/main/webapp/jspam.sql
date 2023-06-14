CREATE TABLE "WOOK"."GUESTBOOK"(
    "IDX" NUMBER(*,0) NOT NULL ENABLE, 
	"NAME" CHAR(20 BYTE) NOT NULL ENABLE, 
	"PASSWORD" CHAR(20 BYTE) NOT NULL ENABLE, 
	"MEMO" VARCHAR2(3000 BYTE) NOT NULL ENABLE, 
	"WRITEDATE" TIMESTAMP (6) DEFAULT sysdate, 
	"IP" CHAR(15 BYTE), 
	 CONSTRAINT "GEUSTBOOK_PK" PRIMARY KEY ("IDX")
     );
     
--  ������ �ʱ�ȭ ���
--  ��� �����͸� �����ϰ� �������� �ٽ� �����.
delete from guestbook;
drop SEQUENCE guestbook_idx_seq;
-- �ڵ����� 1�� �����ϴ� ������ ����� (mysql���� auto) --
create SEQUENCE guestbook_idx_seq;

--  �������̸�.nextval : ������ ���� 1 ������Ų��.
insert into guestbook(idx, name, password, memo, ip) values (guestbook_idx_seq.nextval, '������', '1111', '1���Դϴ�.', '192.168.100.101');
insert into guestbook(idx, name, password, memo, ip) values (guestbook_idx_seq.nextval, 'ȫ�浿', '2222', '2���Դϴ�.', '192.168.100.102');
insert into guestbook(idx, name, password, memo, ip) values (guestbook_idx_seq.nextval, '�Ӳ���', '3333', '3���Դϴ�.', '192.168.100.103');
insert into guestbook(idx, name, password, memo, ip) values (guestbook_idx_seq.nextval, '����', '4444', '4���Դϴ�.', '192.168.100.104');

select * from guestbook;
select * from guestbook order by idx desc;
select count(*) from guestbook;
select count(*) from guestbook WHERE memo like '%1��%';
select count(*) from guestbook WHERE name like '%��%';
select count(*) from guestbook WHERE memo like '%��%' OR name like '%��%';

--  Ʈ������� �ѹ��� ��� ����Ǿ�� �� ����� ������ ���Ѵ�.
--  commit: Ʈ������� ��� ���������� ó���Ǽ� ����� �����ͺ��̽��� �ݿ��Ѵ�.
--  rollback: Ʈ������� ��� ���������� ó������ �ʾ��� ��� ���� ������� �������� �ǵ�����.
--  ����Ŭ �𺧷��۴� auto commit�� �������� �ʱ� ������ �𺧷��ۿ��� ������ �۾��� jsp�� ����ǰ� �Ϸ��� �ݵ�� commit ����� �����ؾ� �Ѵ�.
commit;

select * from (
    --  rnum�� rownum�� ���� / rownum���� index ��ȣ�� �� (������ �� ���� ��ȣ)
    select rownum rnum, TT.* from (
        select * from guestbook order by idx DESC
    ) TT where rownum <= 20
    --  where rownum <= 20 �� index��ȣ�� 20���� �� �� ->endNo
) where rnum >= 11;
-- where rnum >= 11 -> startNo

select * from guestbook where idx = 10;

delete from guestbook where idx = 280;

update guestbook set name = '������', memo='�����Ǿ����ϴ�.' WHERE idx = 296;










