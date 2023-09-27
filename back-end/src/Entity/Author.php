<?php

namespace App\Entity;

use App\Repository\AuthorRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AuthorRepository::class)]
class Author
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'author', targetEntity: book::class)]
    private Collection $book_id;

    #[ORM\Column(length: 255)]
    private ?string $first_name = null;

    #[ORM\Column(length: 255)]
    private ?string $last_name = null;

    public function __construct()
    {
        $this->book_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, book>
     */
    public function getBookId(): Collection
    {
        return $this->book_id;
    }

    public function addBookId(book $bookId): static
    {
        if (!$this->book_id->contains($bookId)) {
            $this->book_id->add($bookId);
            $bookId->setAuthor($this);
        }

        return $this;
    }

    public function removeBookId(book $bookId): static
    {
        if ($this->book_id->removeElement($bookId)) {
            // set the owning side to null (unless already changed)
            if ($bookId->getAuthor() === $this) {
                $bookId->setAuthor(null);
            }
        }

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->first_name;
    }

    public function setFirstName(string $first_name): static
    {
        $this->first_name = $first_name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->last_name;
    }

    public function setLastName(string $last_name): static
    {
        $this->last_name = $last_name;

        return $this;
    }
}
