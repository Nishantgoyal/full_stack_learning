import psycopg2


def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="todoapp",
        user="postgres",
        password="mysecretpassword"
    )


def refresh_todos_table(cur):
    print("Creating Table")
    cur.execute("DROP TABLE IF EXISTS todos;")
    cur.execute("""
        CREATE TABLE todos (
            id integer PRIMARY KEY,
            completed BOOLEAN NOT NULL DEFAULT False
        );
    """)


def insert_data(cur, ID, completed):
    cur.execute(
        'Insert into todos (id, completed) '
        'Values ({}, {});'.format(ID, completed))


def get_data(cur):
    cur.execute('Select * from todos;')
    return cur.fetchall()


def main():
    print("Starting...")
    conn = None
    try:
        conn = get_connection()
        cur = conn.cursor()
        refresh_todos_table(cur)
        insert_data(cur, 1, True)
        insert_data(cur, 2, False)
        insert_data(cur, 3, True)
        data = get_data(cur)
        for record in data:
            print(record)
        cur.close()
        conn.commit()

    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')


if __name__ == '__main__':
    main()
