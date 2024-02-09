using Umbraco.Cms.Core.Models.PublishedContent;

namespace smdaProject.Services
{
    public interface ISearchService
    {
        IEnumerable<IPublishedContent> SearchContentNames(string query);
    }
}
