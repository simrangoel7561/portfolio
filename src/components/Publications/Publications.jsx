import styles from './Publications.module.css';
import { publications } from '../../data/portfolioData';
import bookImage from '../../assets/w2w-kuchu.jpg';

function Publications() {
  return (
    <section className={styles.publications} id="publications">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{publications.title}</h2>
          <p className={styles.sectionSubtitle}>{publications.description}</p>
        </div>

        {/* Book */}
        <div className={styles.bookSection}>
          <h3 className={styles.subsectionTitle}>Book</h3>
          <div className={styles.bookCard}>
            <div className={styles.bookImageCol}>
              <img
                src={bookImage}
                alt={`${publications.book.title} — ${publications.book.type}`}
                className={styles.bookImage}
              />
            </div>
            <div className={styles.bookInfo}>
              <h4 className={styles.bookTitle}>{publications.book.title}</h4>
              <span className={styles.bookType}>{publications.book.type}</span>
              <p className={styles.bookDescription}>{publications.book.description}</p>
              <a
                href={publications.book.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookLink}
              >
                View Book
                <span className={styles.linkArrow}>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Research & Working Papers */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.subsectionTitle}>Research &amp; Working Papers</h3>
          <div className={styles.paperList}>
            {publications.researchPapers.map((paper, idx) => (
              <div key={idx} className={styles.paperItem}>
                <span className={styles.paperBullet} />
                <div className={styles.paperContent}>
                  <p className={styles.paperTitle}>{paper.title}</p>
                  <div className={styles.paperTags}>
                    {paper.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy & Geopolitical Analysis */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.subsectionTitle}>Policy &amp; Geopolitical Analysis</h3>
          <div className={styles.paperList}>
            {publications.policyAnalysis.map((paper, idx) => (
              <div key={idx} className={styles.paperItem}>
                <span className={styles.paperBullet} />
                <div className={styles.paperContent}>
                  <p className={styles.paperTitle}>{paper.title}</p>
                  <div className={styles.paperTags}>
                    {paper.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Writing */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.subsectionTitle}>Professional Writing</h3>
          <div className={styles.writingCard}>
            <div className={styles.writingStat}>60+</div>
            <div className={styles.writingContent}>
              <p className={styles.writingTitle}>{publications.professionalWriting.title}</p>
              <p className={styles.writingDescription}>{publications.professionalWriting.description}</p>
              {publications.professionalWriting.url && (
                <a href={publications.professionalWriting.url} target="_blank" rel="noopener noreferrer" className={styles.writingLink}>
                  View Selected Articles <span className={styles.linkArrow}>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Selected Policy & Institutional Outputs */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.subsectionTitle}>Selected Policy &amp; Institutional Outputs</h3>
          <p className={styles.outputsIntro}>Across professional and research engagements, I have contributed to:</p>
          <div className={styles.outputsGrid}>
            {publications.institutionalOutputs.map((output, idx) => (
              <div key={idx} className={styles.outputItem}>{output}</div>
            ))}
          </div>
        </div>

        {/* Frameworks & Methodologies */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.subsectionTitle}>Frameworks &amp; Methodologies</h3>
          {publications.frameworks.map((fw, idx) => (
            <div key={idx} className={styles.frameworkCard}>
              <div className={styles.frameworkHeader}>
                <p className={styles.frameworkTitle}>{fw.title}</p>
                <div className={styles.paperTags}>
                  {fw.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <p className={styles.frameworkDescription}>{fw.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;
