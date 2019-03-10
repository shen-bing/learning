package readinglist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import readinglist.domain.Book;
import readinglist.domain.Reader;

public interface ReadingListRepository extends JpaRepository<Book, Long>
{
    List<Book> findByReader(Reader reader);
}
